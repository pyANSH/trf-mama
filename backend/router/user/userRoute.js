const express = require('express');
const router = express.Router();
require('dotenv').config();
const userController = require('../../controller/user');


router.post('/login', userController.login);
router.get('/', userController.user_get);

router.put('/update/status', userController.update_user_status);
router.put('/update/profile', userController.update_user_profile);

router.post('/*', (req, res) => {
    res.sendStatus(421).send('Invalid place');
})




module.exports = router;

