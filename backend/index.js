const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const { checkKey, checkToken } = require('./middleware/header');
const userRoute = require('./router/user/userRoute');
const meetingRoute = require('./router/meeting/meetingRoute');
const notesRoute = require('./router/notes/notesRoute');
const searchRoute = require('./router/search/searchRoute');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  },
});

app.use(express.json());
app.use(cors());

app.post('/', checkKey, (req, res) => {
  res.sendStatus(200);
});

app.use('/user', checkKey, userRoute);
app.use('/meeting', checkKey, checkToken, meetingRoute);
app.use('/notes', checkKey, checkToken, notesRoute);
app.use('/search', checkKey, checkToken, searchRoute);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
