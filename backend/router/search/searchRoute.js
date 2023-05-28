const router = require('express').Router();
const searchController = require('../../controller/search');




router.get('/user', searchController.search_users);
router.get('/top', searchController.top_users);


module.exports = router;