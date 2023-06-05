const notesModal = require('../Model/notesModal');
const userModal = require('../Model/userModal');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const meetingModal = require('../Model/scheduleModel');
// router.post('/login', (req, res) => {
//     const { userEmail, socialRefererId } = req.body;
//     if (!userEmail || !socialRefererId) {
//         return res.status(400).send('Please fill all the fields');
//     }
//     userModal.find({ userEmail: userEmail, socialRefererId }).then((user) => {
//         if (user.length > 0) {
//             const token = jwt.sign({
//                 userEmail: userEmail,
//                 socialRefererId: socialRefererId
//             }, process.env.JWT_SECRET)
//             return res.status(200).send({ response: 'User logged in', accessToken: token });
//         }
//         else {
//             return res.status(400).send('User not found');
//         }
//     })
// })

exports.login = async (req, res) => {
  const { userEmail, userFullName, socialRefererId, isMentor, profileImg } =
    req.body;

  if (!userEmail || !userFullName || !socialRefererId) {
    res.statusCode = 400;
    return res.send('Please fill all the fields');
  }
  let userExists = await userModal.findOne({
    socialRefererId: socialRefererId,
  });
  if (userExists) {
    const token = jwt.sign(
      {
        id: userExists._id,
        userEmail: userEmail,
        socialRefererId: socialRefererId,
      },
      process.env.JWT_SECRET,
    );
    res.statusCode = 200;
    return res.send({
      response: 'User Successfully logged In',
      userId: userExists._id,
      userEmail: userEmail,
      token: token,
      isMentor: userExists.isMentor,
      interests: userExists.interests,
      profileImg: userExists.profileImg,
    });
  }
  const user = new userModal({
    userEmail: userEmail,
    userFullName: userFullName,
    socialRefererId: socialRefererId,
    isMentor: isMentor,
    profileImg: profileImg,
  });
  try {
    const dbUpdate = await user.save();
    const token = jwt.sign(
      {
        id: dbUpdate._id,
        userEmail: userEmail,
        socialRefererId: socialRefererId,
      },
      process.env.JWT_SECRET,
    );
    res.statusCode = 201;
    return res.send({
      response: 'User created',
      userId: dbUpdate._id,
      userEmail: userEmail,
      token: token,
      isMentor: dbUpdate.isMentor,
      interests: dbUpdate.interests,
      profileImg: profileImg,
    });
  } catch (err) {
    res.statusCode = 400;
    return res.send({ response: 'User not created', err });
  }
};

exports.user_get = async (req, res) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(400).json({ response: 'Please fill all the fields' });
  }
  const getALlGlobalCount = async () => {
    const isMentorCount = await userModal.countDocuments({ isMentor: true });
    const isStudentCount = await userModal.countDocuments({ isMentor: false });
    const usersCount = await userModal.countDocuments();

    const notesCount = await notesModal.countDocuments();
    const meetingsCount = await meetingModal.countDocuments();
    let res = {
      mentorCount: isMentorCount,
      studentCount: isStudentCount,
      usersCount: usersCount,
      notesCount: notesCount,
      meetingsCount: meetingsCount,
    };
    return res;
  };
  const count = await getALlGlobalCount();
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(423).json({ error: 'Invalid token' });
    } else {
      try {
        userModal
          .find({
            _id: decoded.id,
          })
          .then((user) => {
            if (user.length > 0) {
              return res.status(200).json([{ ...user[0]._doc, ...count }]);
            } else {
              return res.status(400).json({ response: 'User not found' });
            }
          });
      } catch (err) {
        return res.status(400).json({ response: 'User not found' });
      }
    }
  });
};
exports.update_user_status = (req, res) => {
  const { interests, isMentor } = req.body;
  const token = req.headers['token'];
  if (!interests || !token || typeof isMentor !== 'boolean') {
    return res.status(400).send('Please fill all the fields');
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(423).send({ error: 'Invalid token' });
    } else {
      userModal
        .findOneAndUpdate(
          { socialRefererId: decoded.socialRefererId },
          { interests: interests, isMentor: isMentor },
          { new: true },
        )
        .then((user) => {
          if (user) {
            return res.status(200).send({ response: 'User updated', user });
          } else {
            return res.status(400).send({ error: 'User not found' });
          }
        });
    }
  });
};
exports.update_user_profile = (req, res) => {
  const { college, userFullName, gender, profileImg } = req.body;
  const token = req.headers['token'];
  if (!college && !userFullName && !gender && !profileImg) {
    return res.status(400).send('Please fill at least one field(s)');
  }
  if (!token) {
    return res.status(400).send('token missing');
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(423).send({ error: 'Invalid token' });
    } else {
      userModal
        .findOneAndUpdate(
          { socialRefererId: decoded.socialRefererId },
          {
            college: college,
            userFullName: userFullName,
            gender: gender,
            profileImg: profileImg,
          },
          { new: true },
        )
        .then((user) => {
          if (user) {
            return res
              .status(200)
              .send({ response: 'User profile updated', user });
          } else {
            return res.status(400).send({ error: 'User not updated' });
          }
        });
    }
  });
};

exports.mentors_get = async (req, res) => {
  try {
    const mentors = await userModal.find({ isMentor: true });
    //   console.log(mentors);
    res.status(200).json(mentors);
  } catch (err) {
    //   console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
