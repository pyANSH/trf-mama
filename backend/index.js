const express = require('express');
const app = express();
const userRoute = require('./router/user/userRoute');
const meetingRoute = require('./router/meeting/meetingRoute');
const notesRoute = require('./router/notes/notesRoute');
const searchRoute = require('./router/search/searchRoute');
const { checkKey, checkToken } = require('./middleware/header');
var cors = require('cors')

app.use(express.json());
app.use(cors())

app.post('/', checkKey, (req, res) => {
    res.sendStatus(200);
})
app.use('/user', checkKey, userRoute);
app.use('/meeting', checkKey, checkToken, meetingRoute);
app.use('/notes', checkKey, checkToken, notesRoute);
app.use('/search', checkKey, checkToken, searchRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
