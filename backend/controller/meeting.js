
const meetingModal = require('../Model/scheduleModel');
const userModal = require('../Model/userModal');


exports.schedule_create = async (req, res) => {
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

        const findMentor = await userModal.find({ _id: request.mentorId })
        const findMentee = await userModal.find({ _id: request.menteeId })

        findMentor[0].meetings.push(meeting._id)
        findMentee[0].meetings.push(meeting._id)
        findMentor[0].save()
        findMentee[0].save()
        if (findMentor[0].isMentor === false || findMentee[0].isMentor === true) {
            return res.status(400).send({ response: 'Please enter valid mentor and mentee' });
        }
        meeting.save()
        return res.status(201).send({ response: 'Meeting scheduled', meetingId: meeting._id })
    }
    catch (err) {
        return res.status(400).send({ response: 'Meeting not scheduled', err })
    }
}
exports.get_meeting = async (req, res) => {
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
}
exports.update_meeting = async (req, res) => {
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
}
exports.get_all_meetings = async (req, res) => {
    const { userId } = req.query;
    if (!userId) {
        return res.status(400).send({ response: 'Please fill all the fields' });
    }
    else {
        const meetings = await meetingModal.find({ $or: [{ mentorId: userId }, { menteeId: userId }] })
        if (meetings.length > 0) {
            res.status(200).send({ response: 'Meetings found', meetings })
        }
        else {
            res.status(400).send({ response: 'Meetings not found' })
        }
    }

}

