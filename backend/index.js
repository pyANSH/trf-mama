const express = require('express');
const http = require('http');
const cors = require('cors');

const { checkKey, checkToken } = require('./middleware/header');
const userRoute = require('./router/user/userRoute');
const globalRoute = require('./router/global/GlobalRoute');
const meetingRoute = require('./router/meeting/meetingRoute');
const notesRoute = require('./router/notes/notesRoute');
const searchRoute = require('./router/search/searchRoute');
const socket = require('./sockets/socket');

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());

app.post('/', checkKey, (req, res) => {
  res.sendStatus(200);
});
app.use('/global', checkKey, globalRoute);

app.use('/user', checkKey, userRoute);
app.use('/meeting', checkKey, checkToken, meetingRoute);
app.use('/notes', checkKey, checkToken, notesRoute);
app.use('/search', checkKey, checkToken, searchRoute);

socket.initializeSocket(server);

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
