const path = require('path');

module.exports = function(app) {
    const User = require('./models/user');
    const userController = require('./modules/userController.js');

    app.post('/rest/newUserRegistration', (req,res) => {
        userController.registerUser(req,res);
        // console.log("saving user...");
    });

    app.post('/rest/login', (req,res) => {
        userController.authentication(req,res);
    });
}
