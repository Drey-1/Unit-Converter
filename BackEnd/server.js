const express = require("express");
const app = express();
const temperatureRoute = require("./temperature.js")
const weightRoute = require("./weight.js")
const lengthRoute = require("./length.js")

app.use(express.json());
app.use("/",temperatureRoute);
app.use("/",weightRoute);
app.use("/",lengthRoute);

module.exports = app