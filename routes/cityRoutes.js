const express = require("express");
const router = express.Router();
const cityController = require("../controllers/cityController");

router.get("/", cityController.getAllCities);
router.post("/", cityController.addCity);
router.delete("/:_id", cityController.removeCity);

module.exports = router;
