const express = require('express');

const AuthController = require('./controllers/authentication');
const ImageThumbController = require('./controllers/image_thumbnail');
const passport = require('passport');
const passportService = require('./config/passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function (app) {
    // Initializing route groups
    const apiRoutes = express.Router();
    const authRoutes = express.Router();
    const imageThumbRoutes = express.Router();


    apiRoutes.use('/auth', authRoutes);
    // route to  auth
    authRoutes.post('/register', AuthController.register);
    authRoutes.post('/login', requireLogin, AuthController.login);

    apiRoutes.use('/image_thumb', imageThumbRoutes);
    imageThumbRoutes.get('/', ImageThumbController.getImage);




// Set url for API group routes
    app.use('/api', apiRoutes);
};

