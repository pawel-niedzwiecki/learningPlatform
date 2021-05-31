var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var configDB = require("./config/db.config");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//Set up default mongoose connection
var mongoDB = `mongodb+srv://${configDB.username}:${configDB.password}@${configDB.host}/${configDB.db}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
