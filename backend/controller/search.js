
const userModels = require('../Model/userModal');

exports.search_users = async (req, res) => {
    const { p, mentor, all } = req.query;
    try {
        if (all === 'true') {

            const result = await userModels.find({}, { userFullName: 1, _id: 1, isMentor: 1, profileImg: 1, interests: 1, gender: 1 })
            console.log(1)
            return res.status(200).send(result);
        }
        if (mentor === 'true') {
            const result = await userModels.find({ userFullName: { $regex: p, $options: 'i' }, isMentor: true }, { userFullName: 1, _id: 1, isMentor: 1, profileImg: 1, interests: 1, gender: 1 })
            console.log(2)
            return res.status(200).send(result);
        }
        if (mentor === 'false') {
            const result = await userModels.find({ userFullName: { $regex: p, $options: 'i' }, isMentor: false }, { userFullName: 1, _id: 1, isMentor: 1, profileImg: 1, interests: 1, gender: 1 })
            console.log(3)
            return res.status(200).send(result);
        }

        const result = await userModels.find({ userFullName: { $regex: p, $options: 'i' } }, { userFullName: 1, _id: 1, isMentor: 1, profileImg: 1, interests: 1, gender: 1 })
        console.log(4)
        return res.status(200).send(result);
    }
    catch (err) {
        return res.status(400).send(err)
    }
}

