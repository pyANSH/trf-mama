const express = require('express');
const router = express.Router();
require('dotenv').config();
const userController = require('../../controller/user');


router.post('/login', userController.login);
router.get('/', userController.user_get);

router.put('/update', userController.update_user);

router.post('/*', (req, res) => {
    res.sendStatus(421).send('Invalid place');
})




module.exports = router;

