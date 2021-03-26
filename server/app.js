require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Cors Middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.locals.title = "Express - Generated with IronGenerator";

app.use("/api", require("./routes/movies.routes"));

module.exports = app;
