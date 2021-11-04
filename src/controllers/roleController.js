const { Role, sequelize } = require("../models");

/*
--------------------------
Create and save a new user
in the database
--------------------------
*/
async function register(req, res, next) {
  const roleInput = {
    roleName: req.body.roleName,
  };

  try {
    // Save Role to Database
    const role = await Role.create(roleInput);
    if (role) {
      res.status(201).send({ message: "Role was registered successfully!" });
    } else {
      throw new Error("problem arising from the role");
    }
  } catch (error) {
    // Rollback transaction if is not successful
    res.status(500).send({ error: ` ${error}` });
  }
}

module.exports = {
  register,
};
