const { Theme } = require("../models");

async function createTheme(req, res) {
  const { title } = req.body;
  try {
    const theme = Theme.create(title);
    if (!theme) {
      return res
        .status(400)
        .json({ error: "A problem occurred when adding the theme" });
    }
  } catch (error) {
    return res.status(500).json({ error: ` ${error}` });
  }
}

async function updateTheme(req, res) {}

async function deleteTheme(req, res) {
  const { id } = req.param;
  try {
  } catch (error) {}
}

async function getAllThemes(req, res) {
  try {
    const themes = Theme.findAll();
    if (themes.length === 0)
      return response.status(404).json({ message: "Themes not found" });
    return res
      .status(200)
      .json({ message: "Themes found successfully !", themes });
  } catch (error) {
    res.status(500).json({ error: ` ${error}` });
  }
}

async function getOneTheme(req, res) {
  const { id } = req.param;
  try {
    const theme = Theme.findOne(id);
    if (!theme) return res.status(404).json({ message: "Theme not found" });
    return res
      .status(200)
      .json({ message: "Theme found successfully !", theme });
  } catch (error) {
    res.status(500).json({ error: ` ${error}` });
  }
}
