const express = require("express");
const { default: mongoose } = require("mongoose");
const cookieParse = require('cookie-parse');
const cors = require('cors');

// create a database connection -> u can also
// create a separate file for this and then import/use that file here
mongoose
  .connect("mongodb+srv://djboburdev:dien@cluster0.zaugh.mongodb.net/")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;
