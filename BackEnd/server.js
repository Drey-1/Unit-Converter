const express = require("express");
const app = express();
const temperatureRoute = require("./temperature.js")

app.use(express.json());
app.use("/",temperatureRoute);


module.exports = app