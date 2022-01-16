const {Router} = require('express');
const authController = require('../controllers/authControllers');

const router = Router();
const auth = require('../middleware/auth');

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.get('/user', auth, authController.getUser);

module.exports = router;