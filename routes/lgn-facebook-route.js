import express from "express";
import passport, { Passport } from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import expressSession from "express-session";
import config from "../dbConfig/config.js";

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/",
    },
    (accessToken, refreshToken, profile, callback) => {
      callback(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: config.FACEBOOK_CLIENT_ID,
      clientSecret: config.FACEBOOK_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/",
      profileFields: ["emails", "displayName", "name", "picture"],
    },
    (accessToken, refreshToken, profile, callback) => {
      callback(null, profile);
    }
  )
);

passport.serializeUser((user, callback) => {
  callback(null, user);
});

passport.deserializeUser((user, callback) => {
  callback(null, user);
});

app.use(
  expressSession({
    secret: "jayantpatilapp",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
//routes
app.get(
  "/login/google",
  passport.authenticate("google", { scope: ["profile email"] })
);
app.get(
  "/login/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

app.get("/google", passport.authenticate("google"), (req, res) => {
  res.redirect("/");
});
app.get("/facebook", passport.authenticate("facebook"), (req, res) => {
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.send(req.user ? req.user : "Login with Google or facebook");
});

export default app;
