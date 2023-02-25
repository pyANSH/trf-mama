const router = require('express').Router();
const userModels = require('../../Model/userModal');

router.get('/user', async (req, res) => {
    const { p } = req.query;
    try {
        const result = await userModels.find({ userFullName: { $regex: p, $options: 'i' } }, { userFullName: 1, _id: 1 })
        return res.status(200).send(result);
    }
    catch (err) {
        return res.status(400).send(err)
    }
})




module.exports = router;