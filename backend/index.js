const express = require('express');
const http = require('http');
const cors = require('cors');

const { checkKey, checkToken } = require('./middleware/header');
const userRoute = require('./router/user/userRoute');
const meetingRoute = require('./router/meeting/meetingRoute');
const notesRoute = require('./router/notes/notesRoute');
const searchRoute = require('./router/search/searchRoute');
const { Socket } = require('socket.io');

const app = express();
const server = http.createServer(app);

const socket = require('./sockets/socket');

app.use(express.json());
app.use(cors());

app.post('/', checkKey, (req, res) => {
  res.sendStatus(200);
});

app.use('/user', checkKey, userRoute);
app.use('/meeting', checkKey, checkToken, meetingRoute);
app.use('/notes', checkKey, checkToken, notesRoute);
app.use('/search', checkKey, checkToken, searchRoute);

socket.init(server);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
