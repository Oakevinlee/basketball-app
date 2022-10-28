const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy(
    //config object
     {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
     },
    //verify callback function
    //lets use async/await/
     async function(accessToken, refreshToken, profile, cb) {

     }
));