require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const hbs = require("hbs");
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

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true,
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

app.use("/api", require("./routes/index"));
app.use("/api", require("./routes/movies.routes"));

module.exports = app;
