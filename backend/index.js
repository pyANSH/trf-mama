require('dotenv').config();
const express = require('express');
const app = express();
const userRoute = require('./router/user/userRoute');

app.use(express.json());

app.post('/', checkKey, (req, res) => {
    res.sendStatus(200);
})


function checkKey(req, res, next) {
    if (req.headers['x-api-key'] === process.env.KEY) {
        next();
    } else {
        console.log(req.headers)
        res.sendStatus(401);
    }
}

app.use('/user', checkKey, userRoute);

app.listen(8000, () => {
    console.log('Server is running on port 3000');
})