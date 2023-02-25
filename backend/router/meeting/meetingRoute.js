const express = require('express');
const router = express.Router();
const meetingModal = require('../../Model/scheduleModel');
const userModal = require('../../Model/userModal');


router.post('/schedule', async (req, res) => {
    const request = req.body;
    if (!request.mentorId || !request.menteeId || !request.meetingDate || !request.meetingTime || !request.meetingDuration || !request.meetingTopic || !request.meetingDescription) {
        return res.status(400).send({ response: 'Please fill all the fields' });
    }
    const checkMeetingExists = await meetingModal.find({ mentorId: request.mentorId, menteeId: request.menteeId, meetingDate: request.meetingDate, meetingTime: request.meetingTime })

    if (checkMeetingExists.length > 0) {
        return res.status(400).send({ response: 'Meeting already scheduled' });
    }

    const meeting = new meetingModal(request)
    try {
        meeting.save().then((data) => {
            userModal.findOneAndUpdate({ _id: request.mentorId }, { $push: { meetings: data._id } }, { new: true }, (err, doc) => {
                if (err) {
                    console.log("Something wrong when updating data!");
                }
                console.log(doc);
            });
            userModal.findOneAndUpdate({ _id: request.menteeId }, { $push: { meetings: data._id } }, { new: true }, (err, doc) => {
                if (err) {
                    console.log("Something wrong when updating data!");
                }
                console.log(doc);
            });
        })


        res.status(201).send({ response: 'Meeting scheduled', meetingId: meeting._id })
    }
    catch (err) {
        res.status(400).send({ response: 'Meeting not scheduled', err })
    }
})
router.get('/get', async (req, res) => {
    const { meetingId } = req.query;
    if (!meetingId) {
        return res.status(400).send({ response: 'Please fill all the fields' });
    }
    else {
        const meetings = await meetingModal.find({ _id: meetingId })
        if (meetings.length > 0) {
            res.status(200).send({ response: 'Meetings found', meetings })
        }
        else {
            res.status(400).send({ response: 'Meetings not found' })
        }
    }
})
router.put('/update', async (req, res) => {
    const { meetingId, meetingStatus } = req.body;
    if (!meetingId, !meetingStatus) {
        return res.status(400).send({ response: 'Please fill all the fields' });
    }
    try {
        const meetingUpdate = await meetingModal.updateOne({ _id: meetingId }, { $set: { meetingStatus: meetingStatus } })
        res.status(200).send({ response: 'Meeting updated', meetingUpdate })
    }
    catch (err) {
        res.status(400).send({ response: 'Meeting not updated', err })
    }
})



module.exports = router;


