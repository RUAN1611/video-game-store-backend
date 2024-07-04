const Customer = require("../models/Customer");
const City = require("../models/City");

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().populate("city");
    res.status(200).json({
      status: "success",
      data: {
        customers,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.addCustomer = async (req, res) => {
  try {
    const { name, surname, idNumber, dateOfBirth, email, city } = req.body;

    let selectedCity;

    if (city) {
      selectedCity = await City.findOne({ name: city }); // Find City User Entered
      if (!selectedCity) {
        // If the City Does Not Exist, Then Add It
        selectedCity = new City({
          name: city,
        });
        await selectedCity.save();
      }
    }

    const customer = new Customer({
      name,
      surname,
      idNumber,
      dateOfBirth,
      email,
      city: selectedCity ? selectedCity._id : null, // Check if User Added/Selected City
    });

    const newCustomer = await customer.save();

    res.status(201).json({
      status: "success",
      data: {
        customer: newCustomer,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
