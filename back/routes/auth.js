const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("connect-flash");
const path = require("path");

const { User, Video } = require("../models");

require("dotenv").config();

const router = express.Router();

router.post("/register",async (req, res, next) => {
    try {
      const exUser = await User.findOne({ where: { email: req.params.email } });
      if (exUser) {
        req.flash("registerError", "이미 가입된 이메일 입니다.");
        return res.redirect("/");
      } else {
        const hash = await bcrypt.hash(req.body.password, 10);
        // await User.create({
        //   email: req.body.email,
        //   nick: req.body.name,
        //   password: hash,
        //   profile_image: req.body.ProfileUrl,
        // });
        res.redirect("/");
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
  /*login post*/
  router.post("/login", (req, res, next) => {
    passport.authenticate("local", (error, user, info) => {
      if (error) {
        console.error(error);
        return next(error);
      }
  
      if (!user) {
        req.flash("loginError", info.message);
        return res.redirect("/");
      }
  
      req.login(user, loginError => {
        if (loginError) {
          console.error(loginError);
          return next(loginError);
        }
        console.log(user.nick + " 님이 로그인 하셨습니다."); /* 접속자 이름 */
        return res.json(user);
      });
    })(req, res, next);
  });

  module.exports=router;