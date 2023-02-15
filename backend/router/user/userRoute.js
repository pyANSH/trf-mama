const express = require('express');
const router = express.Router();
const userModal = require('../../db/Model/userModal');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/login', (req, res) => {
    const { userEmail, socialRefferarId } = req.body;
    if (!userEmail || !socialRefferarId) {
        return res.status(400).send('Please fill all the fields');
    }
    userModal.find({ userEmail: userEmail, socialRefferarId }).then((user) => {
        if (user.length > 0) {
            const token = jwt.sign({
                userEmail: userEmail,
                socialRefferarId: socialRefferarId
            }, process.env.JWT_SECRET)
            return res.status(200).send({ response: 'User logged in', accessToken: token });
        }
        else {
            return res.status(400).send('User not found');
        }
    })
})


router.post('/new', async (req, res) => {
    const { userId, userEmail, interests, userFullName, socialRefferarId } = req.body;

    await userModal.find({ userEmail: userEmail }).then((user) => {
        if (user.length > 0) {
            return res.status(400).send('User already exist');
        }
    })

    const newUser = new userModal({
        userId,
        userEmail,
        interests,
        userFullName,
        socialRefferarId
    })
    const token = jwt.sign({
        userEmail: userEmail,
        socialRefferarId: socialRefferarId
    }, process.env.JWT_SECRET)
    await newUser.save().then(() => res.status(200).send({ response: 'User created', accessToken: token })).catch(err => res.status(400).send(err.message));
}
)

router.post('/*', (req, res) => {
    res.sendStatus(421);
})


module.exports = router;

