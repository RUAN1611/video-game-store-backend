const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GameCategory",
    required: true,
  },
});

module.exports = mongoose.model("Game", GameSchema);
