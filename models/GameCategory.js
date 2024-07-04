const mongoose = require("mongoose");

const GameCategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("GameCategory", GameCategorySchema);
