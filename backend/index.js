const express = require('express');
const app = express();
const userRoute = require('./router/user/userRoute');

app.use(express.json());

app.post('/', (req, res) => {
    res.sendStatus(200);
})

app.use('/user', userRoute);

app.listen(8000, () => {
    console.log('Server is running on port 3000');
})