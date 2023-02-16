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

    if (!userId || !userEmail || !interests || !userFullName || !socialRefferarId) {
        return res.status(400).send('Please fill all the fields');
    }
    //check email already exists in db userModal
    let userExists = await userModal.findOne({ userEmail: userEmail });
    if (userExists) {
        return res.status(400).send('User already registered.');
    }

    const user = new userModal({
        userId: userId,
        userEmail: userEmail,
        interests: interests,
        userFullName: userFullName,
        socialRefferarId: socialRefferarId,
    })

    try {
        const newUser = await user.save();
        res.status(201).send({ response: 'User created', newUser });
    } catch (err) {
        res.status(400).send({ response: 'User not created', err });
    }
})


router.post('/*', (req, res) => {
    res.sendStatus(421).send('Invalid place');
})


module.exports = router;

