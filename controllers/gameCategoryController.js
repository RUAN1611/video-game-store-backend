const GameCategory = require("../models/GameCategory");

exports.getAllCategories = async (req, res) => {
  try {
    const gameCategories = await GameCategory.find();
    res.status(200).json({
      status: "success",
      data: {
        gameCategories,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.addCategory = async (req, res) => {
  try {
    const category = new GameCategory(req.body);
    const newCategory = await category.save();
    res.status(201).json({
      status: "success",
      data: {
        newCategory,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.removeCategory = async (req, res) => {
  try {
    const _id = await req.params._id;
    const category = await Category.findByIdAndDelete(_id);

    if (!category) {
      res.status(404).json({
        status: "fail",
        message: "Category not found",
      });
    } else {
      res.status(201).json({
        status: "success",
        message: "Category has been removed!",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
