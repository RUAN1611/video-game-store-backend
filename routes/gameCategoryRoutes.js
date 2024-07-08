const express = require("express");
const router = express.Router();
const gameCategoryController = require("../controllers/gameCategoryController");

router.get("/", gameCategoryController.getAllCategories);
router.post("/", gameCategoryController.addCategory);
router.delete("/:_id", gameCategoryController.removeCategory);

module.exports = router;
