const express = require("express");
const config = require("./config/config");
const path = require("path");
const routes = require("./routes/v1/app.routes");

const app = express();
const appConfig = config();

app.set("view engine", "ejs")
    .set("views", path.join(__dirname, "./views"))
    .use(`/${appConfig.apiVersion}`, routes);

module.exports = app;
