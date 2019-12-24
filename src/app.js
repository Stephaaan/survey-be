require("dotenv").config()

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const Router = require("./Router")
const app = express();

app.use(bodyParser.json());
app.use(cors())
app.use(Router)

app.listen(process.env.PORT, console.log("listening on",process.env.PORT));
