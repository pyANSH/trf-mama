const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('existing user');
})
router.post('/new', (req, res) => {
    console.log(req.body);
    res.send('new user');
})
router.post('/*', (req, res) => {
    res.sendStatus(421);
})


module.exports = router;
