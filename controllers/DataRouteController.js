const DataSchema = require("../models/recordSchema");

const testConnection = (req, res) => {
  res.status(200).send("Just Kidding");
};

const fetchedData = async (req, res) => {
  let BpData = await DataSchema.find({});

  try {
    console.log(`The data being sent: ${BpData}}`);
    res.send(BpData).status(200);
  } catch (error) {
    res.send(error).status(500);
  }
};

const postedData = async (req, res) => {
  let data = req.body;
  try {
    const BpData = await DataSchema.create(data);
    await BpData.save();
    res.send(BpData);
  } catch (error) {
    res.send(error).status(500);
  }
};

module.exports = { testConnection, fetchedData, postedData };
