const userModal = require('../Model/userModal');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// router.post('/login', (req, res) => {
//     const { userEmail, socialRefererId } = req.body;
//     if (!userEmail || !socialRefererId) {
//         return res.status(400).send('Please fill all the fields');
//     }
//     userModal.find({ userEmail: userEmail, socialRefererId }).then((user) => {
//         if (user.length > 0) {
//             const token = jwt.sign({
//                 userEmail: userEmail,
//                 socialRefererId: socialRefererId
//             }, process.env.JWT_SECRET)
//             return res.status(200).send({ response: 'User logged in', accessToken: token });
//         }
//         else {
//             return res.status(400).send('User not found');
//         }
//     })
// })


exports.login = async (req, res) => {
    const { userEmail, interests, userFullName, socialRefererId, isMentor } = req.body;

    if (!userEmail || !interests || !userFullName || !socialRefererId) {
        res.statusCode = 400;
        return res.send('Please fill all the fields');
    }
    let userExists = await userModal.findOne({ socialRefererId: socialRefererId });
    if (userExists) {
        const token = jwt.sign({
            id: userExists._id,
            userEmail: userEmail,
            socialRefererId: socialRefererId
        }, process.env.JWT_SECRET)
        res.statusCode = 200;
        return res.send({ response: 'User Successfully logged In', userId: userExists._id, userEmail: userEmail, token: token, isMentor: userExists.isMentor, interests });
    }
    const user = new userModal({
        userEmail: userEmail,
        interests: interests,
        userFullName: userFullName,
        socialRefererId: socialRefererId,
        isMentor: isMentor
    })
    try {
        const dbUpdate = await user.save()
        const token = jwt.sign({
            id: dbUpdate._id,
            userEmail: userEmail,
            socialRefererId: socialRefererId
        }, process.env.JWT_SECRET)
        res.statusCode = 201;
        return res.send({ response: 'User created', userId: dbUpdate._id, userEmail: userEmail, token: token, isMentor: dbUpdate.isMentor });
    } catch (err) {
        res.statusCode = 400;
        return res.send({ response: 'User not created', err });
    }
}

exports.user_get = (req, res) => {
    const { userId, token } = req.query;
    if (!userId || !token) {
        return res.status(400).json({ response: 'Please fill all the fields' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

        if (err || decoded.id !== userId) {
            return res.status(401).json({ response: 'Invalid token' });
        }
        else {
            try {
                userModal.find({ _id: userId }).then((user) => {
                    if (user.length > 0) {
                        return res.status(200).json(user);
                    }
                    else {
                        return res.status(400).json({ response: 'User not found' });
                    }
                })
            }
            catch (err) {
                return res.status(400).json({ response: 'User not found' });

            }
        }
    })
}
exports.update_user = (req, res) => {
    const { userEmail, interests, userFullName, socialRefererId, isMentor } = req.body;
    const token = req.headers['token'];
    if (!interests || !token || !isMentor) {
        return res.status(400).send('Please fill all the fields');
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(423).send({ error: 'Invalid token' });
        }
        else {
            userModal.findOneAndUpdate({ socialRefererId: decoded.socialRefererId }, { interests: interests, isMentor: isMentor }, { new: true }).then((user) => {
                if (user) {
                    return res.status(200).send({ response: 'User updated', user });
                }
                else {
                    return res.status(400).send({ error: 'User not found' });
                }
            })
        }
    })
}

