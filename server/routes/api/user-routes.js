const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveNote,
  deleteNote,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveNote);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/Note/:noteId').delete(authMiddleware, deleteNote);

module.exports = router;
