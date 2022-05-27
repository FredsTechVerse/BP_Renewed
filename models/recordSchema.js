const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  Day: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: String,
    default: new Date(),
  },
  Systolic: {
    type: Number,
    required: true,
  },
  Diastolic: {
    type: Number,
    required: true,
  },
});
//CREATING THE MODEL FROM THE SCHEMA
//===================================
const DataModel = mongoose.model("DataModel", DataSchema);
//EXPORTING THE MODEL AS A MODULE
//=================================
module.exports = DataModel;

// A module is like a broken away piece of code that is ment to be reused.
