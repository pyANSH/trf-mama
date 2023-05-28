const router = require('express').Router();
const globalController = require('../../controller/global');




router.get('/', globalController.get_count);


module.exports = router; 