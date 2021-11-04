const { Level, sequelize } = require("../models");
/*
--------------------------
Create and save a new level
in the database
--------------------------
*/
async function createLevel({ body }, res, next) {
  const levelInput = {
    levelName: body.levelName,
  };
  try {
    //save level to DataBase
    const level = await Level.create(levelInput);
    if (level) {
      res.status(201).send({ message: "Level created successfully!" });
    } else {
      throw new Error("problem arising from the level");
    }
  } catch (error) {
    // Rollback transaction if is not successful
    res.status(500).send({ error: ` ${error}` });
  }
}

/*
--------------------------
getting all levels
from the database
--------------------------
*/
async function findLevel(req, res, next) {
  try {
    const levels = await Level.findAll();
    if (levels) {
      res
        .status(200)
        .send({ message: "Levels gotten successfully !", data: levels });
    } else {
      throw new Error("problem arising from level finding");
    }
  } catch (error) {
    // Rollback transaction if is not successful
    res.status(500).send({ error: ` ${error}` });
  }
}

/*
--------------------------
updating a level
in the database
--------------------------
*/
async function updateLevel({ body, params }, res, next) {
  const levelInput = {
    levelName: body.levelName,
  };
  try {
    const level = await Level.update(levelInput, {
      where: {
        id: params.id,
      },
    });
    if (level) {
      res.status(200).send({ message: "updated successfully?!" });
    } else {
      throw new Error("problem arising from the level updating");
    }
  } catch (error) {
    // Rollback transaction if is not successful
    res.status(500).send({ error: ` ${error}` });
  }
}
/*
--------------------------
deleting a level
from database
--------------------------
*/
async function deleteLevel({ params }, res, next) {
  try {
    const level = await Level.destroy({
      where: {
        id: id,
      },
    });
    if (level) {
      res.status(200).send({ message: "level deleted successfully !" });
    } else {
      throw new Error("problem arising from the level deleting");
    }
  } catch (error) {
    // Rollback transaction if is not successful
    res.status(500).send({ error: ` ${error}` });
  }
}
module.exports = {
  createLevel,
  findLevel,
  updateLevel,
  deleteLevel,
};
