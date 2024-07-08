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

exports.removeCity = async (req, res) => {
  try {
    const _id = req.params._id;
    const city = await City.findByIdAndDelete(_id);

    if (!city) {
      res.status(404).json({
        status: "fail",
        message: "City not found",
      });
    } else {
      res.status(201).json({
        status: "success",
        message: "City has been removed",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
