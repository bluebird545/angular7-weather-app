const User = require('../models/user');
// const userService = require('./')

exports.registerUser = (req,res) => {
    console.log("Received registration info");

    var query = {
        email: req.body.email
    }
    var regInfo = {
        user: {
            email: req.body.email,
            password: req.body.password
        }
    }
    // check is user exists using email provided
    // if not create new user
    User.findOne(query, (err,user) => {
        if (err) {
            console.log("Error in registration: " + err);
            res.send({success: false, message: "Error registering user ", err});
        } else if ( !user || user === undefined) {
            // free to create user
            console.log("User does not exist, proceed to user creation");
            var user = new User(regInfo.user);
            // save user
            user.save()
                .then(data => {
                    res.send(true);
                    console.log("User created [ " + regInfo.user.email + " ]");
                }).catch(err => {
                    // res.status(500).send({ message: err.message || "Failed to create user"});
                    res.send({success: false, message: "Falied to create user " + regInfo.user.email});
                });
        } else {
            console.log("User already exists");
            res.send({success: false, message: "User already exists"});
        }
    })
}
exports.authentication = (req,res) => {
    var query = {
        email: req.body.email,
        password: req.body.password
    };
    console.log(query);

    User.findOne(query, (err,user) => {
        if (err || !user || user === undefined) {
            console.log("Could not find user with match credentials [", req.body.email, "] - ", err);
            res.send({success: false, message: "Could not find user with these credentials - ", err});
        } else {
            console.log("User authenticated [", req.body.email, "]");
            res.send({success: true, message: "User authenticated"});
        }
    });
}
