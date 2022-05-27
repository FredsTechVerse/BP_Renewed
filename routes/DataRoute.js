const express = require("express");
const router = express.Router();
const {
  testConnection,
  fetchedData,
  postedData,
} = require("../controllers/DataRouteController");

// A TRIAL OF THE ROUTER METHODS HIERACHY
//=======================================
router.use((req, res, next) => {
  let data =
    "A middleware is simply a function with powers to manipulate the req body." +
    " " +
    "The use method implement first then the others kinda follow.";
  try {
    //Experimental code in here.
    console.log(data);
    next();
  } catch (error) {
    //   Where the error is caught if and when it occurs.
    res.status(500).send("An error occured." + " " + error);
  }
});
// THE CONTROLLERS CAN CO-LIVE WITH EACH OTHER.
router.get("/test", testConnection);

router.get("/", fetchedData);

router.post("/", postedData);

module.exports = router;
