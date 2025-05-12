var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var communityRouter = require("./routes/community");
var authRoutes = require("./routes/auth"); // 위 파일 경로에 맞게 조정
var trainerRouter = require('./routes/trainers');
var profileRouter = require('./routes/profile');
var adminRouter = require('./routes/admin');
var fetchWithAuth = require("./middlewares/proxyMiddleware");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/community', communityRouter);
app.use('/trainers', trainerRouter);
app.use('/profile', profileRouter);
app.use("/auth", authRoutes);
app.use('/admin', adminRouter);
app.use("/api", fetchWithAuth);

module.exports = app;
