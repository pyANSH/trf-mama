require('dotenv').config();
const express = require('express');
const app = express();
const userRoute = require('./router/user/userRoute');

app.use(express.json());

app.post('/', (req, res) => {
    res.sendStatus(200);
})


function checkKey(req, res, next) {
    if (req.headers.key === process.env.API_KEY) {
        next();
    } else {
        res.sendStatus(401);
    }
}

app.use('/user', userRoute);
app.use(checkKey);
app.listen(8000, () => {
    console.log('Server is running on port 3000');
})