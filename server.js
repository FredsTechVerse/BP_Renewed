// APP CONFIGURURAION
// =======================
//HERE WE JUST IMPORT THE MODULES THAT WE NEED IN OUR APPLICATION,EITHER EXTERNAL OR INTERNAL,INACTIVE AT THIS STAGE.
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const port =
  process.env.PORT ||
  3010; /*Just incase we decide to deploy online you know.It will be listening from that new port.*/

//CONNECTING EXPRESS WEB SERVICE TO THE MONGODB DATABASE
//======================================================

console.log(process.env.connectionUrl);
mongoose.connect(process.env.connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//MAKING SURE THAT OUR CONNECTION WAS SUCCESSFUL.
//===============================================
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("The database has been connected to the express server.");
});
//NOT A MUST WE USE BODYPARSER COZ EXPRESS ALREADY HAS ITS OWN METHOD OF INTEPRETING REQUESTS.
//==============================================================================================
const DataRoute = require("./routes/DataRoute");

// MIDDLEWARE SETUP(GAMETIME FOR THE MODULES WHERE NOW WE USE THE KEYWORD APP.USE SOME MODEL HAHA)
// ====================
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //Express own inbuilt middleware for recognizing and interacting with request to the server
app.use(cors());

// HANDLING ANY DATA OPERATIONS.
//===============================
app.use("/data", DataRoute);

app.listen(port, () => {
  console.log(`This app is listening on port ${port}`);
});
