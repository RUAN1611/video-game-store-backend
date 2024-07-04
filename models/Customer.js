const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  idNumber: {
    type: Number,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: false,
  },
});

module.exports = mongoose.model("Customer", CustomerSchema);
