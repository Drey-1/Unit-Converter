const express = require("express");
const app = express();
const temperatureRoute = require("./temperature.js")
const weightRoute = require("./weight.js")

app.use(express.json());
app.use("/",temperatureRoute);
app.use("/",weightRoute);

module.exports = app