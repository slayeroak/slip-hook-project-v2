const express = require('express');
const router = express.Router();

// import validators
const {
    userRegisterValidator,
    userLoginValidator,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../validators/auth');
const { runValidation } = require('../validators');

// import from controllers
const {
    register,
    registerActivate,
    login,
    requireSignin,
    forgotPassword,
    resetPassword,
    googleLogin,
    facebookLogin
} = require('../controllers/auth');

router.post('/register', userRegisterValidator, runValidation, register);
router.post('/register/activate', registerActivate);
router.post('/login', userLoginValidator, runValidation, login);
router.put('/forgot-password', forgotPasswordValidator, runValidation, forgotPassword);
router.put('/reset-password', resetPasswordValidator, runValidation, resetPassword);

// google and facebook
router.post('/google-login', googleLogin);
router.post('/facebook-login', facebookLogin);

// router.get('/secret', requireSignin, (req, res) => {
//     res.json({
//         data: 'This is secret page for logged in users only'
//     });
// });

module.exports = router;
