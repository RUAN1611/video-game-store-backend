const City = require("../models/City");

exports.getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json({
      status: "success",
      data: {
        cities,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.addCity = async (req, res) => {
  try {
    const city = new City(req.body);
    const newCity = await city.save();
    res.status(201).json({
      status: "success",
      data: {
        city: newCity,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
