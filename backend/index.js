require('dotenv').config();
const express = require('express');
const app = express();
const userRoute = require('./router/user/userRoute');
const meetingRoute = require('./router/meeting/meetingRoute');
var cors = require('cors')
// const notesRoute = require('./router/notes/notesRoute');
const { verify } = require('jsonwebtoken');
app.use(express.json());
app.use(cors())

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
function checkToken(req, res, next) {
    const token = req.headers['token'];
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided.' });
    }
    verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
        // if everything good, save to request for use in other routes
        req.userId = decoded.id;
        next();
    });
}

app.use('/user', checkKey, userRoute);
app.use('/meeting', checkKey, checkToken, meetingRoute);
// app.use('/notes', checkKey, checkToken, notesRoute);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})