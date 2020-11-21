const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const http = require("http");
const https = require("https");
const fs = require("fs");
require("dotenv").config();
const cors = require('cors');

const { sequelize } = require("./models");

const apiRouter = require("./routes/api");
const authRouter = require("./routes/auth")
const pageRouter = require("./routes/page");

const app = express();
sequelize.sync();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.set("port", process.env.PORT || 8001);

app.use(cors());
app.use(morgan("dev"));
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname,'../public/css')));
app.use(express.static(path.join(__dirname,'../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.SECRET_COOKIE));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET_COOKIE,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


app.use("/api", apiRouter);
app.use('/', pageRouter);


app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});
app.listen(app.get("port"),() => {
  console.log(app.get("port"), "번 포트에서 대기중 Project2");
});
