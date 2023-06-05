const express = require('express');
const router = express.Router();
const meeting = require('../../controller/meeting');

router.post('/schedule', meeting.schedule_create);

router.get('/get', meeting.get_meeting);
router.put('/update', meeting.update_meeting);
router.get('/getall', meeting.get_all_meetings);

module.exports = router;


