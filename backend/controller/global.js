

const userModal = require('../Model/userModal');
const meetingModal = require('../Model/scheduleModel');
const notesModal = require('../Model/notesModal');

exports.get_count = async (req, res) => {


    const isMentorCount = await userModal.countDocuments({ isMentor: true });
    const isStudentCount = await userModal.countDocuments({ isMentor: false });
    const usersCount = await userModal.countDocuments();

    const notesCount = await notesModal.countDocuments();
    const meetingsCount = await meetingModal.countDocuments();
    const totalViewCount = await notesModal.aggregate([
        {
            $group: {
                _id: null,
                total: { $sum: "$viewCount" }
            }
        }
    ]);


    return res.status(200).json({
        mentorCount: isMentorCount,
        studentCount: isStudentCount,
        usersCount: usersCount,
        notesCount: notesCount,
        meetingsCount: meetingsCount,
        totalViewCount: totalViewCount
    });





}