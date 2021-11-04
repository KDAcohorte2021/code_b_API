const express = require("express");
const {
  createLevel,
  updateLevel,
  deleteLevel,
  findLevel,
} = require("../controllers/levelController");

const levelRoute = express.Router();

levelRoute.post("/register", createLevel);
levelRoute.get("/", findLevel);
levelRoute.put("/update/:id", updateLevel);
levelRoute.delete("/delete/:id", deleteLevel);

module.exports = levelRoute;
