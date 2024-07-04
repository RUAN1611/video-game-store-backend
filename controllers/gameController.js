const Game = require("../models/Game");
const GameCategory = require("../models/GameCategory");

exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find().populate("category");
    res.status(200).json({
      status: "success",
      data: {
        games,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.addGame = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;

    let selectedCategory;

    selectedCategory = await GameCategory.findOne({
      name: category,
    });

    const game = new Game({
      title,
      description,
      price,
      category: selectedCategory._id,
    });

    const newGame = await game.save();
    res.status(201).json({
      status: "success",
      data: {
        newGame,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
