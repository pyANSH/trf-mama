const express = require('express');
const router = express.Router();
const userModal = require('../../Model/userModal');
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


router.post('/login', async (req, res) => {
    const { userId, userEmail, interests, userFullName, socialRefererId, isMentor } = req.body;

    if (!userId || !userEmail || !interests || !userFullName || !socialRefererId, !isMentor) {
        return res.status(400).send('Please fill all the fields');
    }
    let userExists = await userModal.findOne({ socialRefererId: socialRefererId });
    if (userExists) {
        const token = jwt.sign({
            userEmail: userEmail,
            socialRefererId: socialRefererId
        }, process.env.JWT_SECRET)
        res.status(201).send({ response: 'User Successfully logged In', userId: userId, userEmail: userEmail, token: token });
    }
    const user = new userModal({
        userId: userId,
        userEmail: userEmail,
        interests: interests,
        userFullName: userFullName,
        socialRefererId: socialRefererId,
        isMentor: isMentor
    })
    try {
        await user.save();
        const token = jwt.sign({
            userEmail: userEmail,
            socialRefererId: socialRefererId
        }, process.env.JWT_SECRET)
        res.status(201).send({ response: 'User created', userId: userId, userEmail: userEmail, token: token });
    } catch (err) {
        res.status(400).send({ response: 'User not created', err });
    }
})

router.get('/', (req, res) => {
    const { email, token } = req.query;
    if (!email || !token) {
        return res.status(400).json({ response: 'Please fill all the fields' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        console.log(decoded.userEmail);
        if (err || decoded.userEmail !== email) {
            return res.status(401).json({ response: 'Invalid token' });
        }
        else {
            try {
                userModal.find({ userEmail: decoded.userEmail }).then((user) => {
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
})
router.put('/update', (req, res) => {
    const { userEmail, interests, userFullName, socialRefererId, isMentor } = req.body;
    const token = req.headers['token'];
    if (userEmail || !interests || !userFullName || !socialRefererId, !isMentor) {
        return res.status(400).send('Please fill all the fields');
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(423).send({ error: 'Invalid token' });
        }
        else {
            if (decoded.userEmail !== userEmail || decoded.socialRefererId !== socialRefererId) {
                return res.status(422).send('Invalid user');
            }
            userModal.findOneAndUpdate({ socialRefererId: socialRefererId }, { interests: interests, userFullName: userFullName, isMentor: isMentor }, { new: true }).then((user) => {
                if (user) {
                    return res.status(200).send({ response: 'User updated', user });
                }
                else {
                    return res.status(400).send({ error: 'User not found' });
                }
            })
        }
    })
})

router.post('/*', (req, res) => {
    res.sendStatus(421).send('Invalid place');
})


module.exports = router;

