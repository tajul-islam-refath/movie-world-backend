// Basic Lib Import
const { readdirSync } = require("fs");
const express = require("express");
// const router = require("./src/routes/api");
const app = new express();
const morgan = require("morgan");

// Security Middleware Lib Import
require("dotenv").config();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Routing Implement
// app.use("/api/v1", router);
readdirSync("./src/routes").map((r) =>
  app.use("/api/v1", require(`./src/routes/${r}`))
);

app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

// Undefined Route Implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

module.exports = app;
