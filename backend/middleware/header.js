const { verify } = require('jsonwebtoken');
require('dotenv').config();


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
        req.userId = decoded.id;
        next();
    });
}

module.exports = {
    checkKey,
    checkToken

}