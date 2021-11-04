const { Event } = require("./../models");

async function register(req, res) {
  const { libelle } = req.body;

  try {
    const event = await Event.create(libelle);
    if (event) {
      res.status(201).send({ message: "Event was registered successfully!" });
    } else {
      throw new Error("problem arising from the event");
    }
  } catch (error) {
    res.status(500).send({ error: ` ${error}` });
  }
}

async function update(req, res) {
  const { libelle } = req.body;
  const { id } = req.params;

  try {
    const event = await Event.update({ libelle }, { where: { id } });
    if (event) {
      res.status(200).send({ message: "Event was updated successfully!" });
    } else {
      throw new Error("problem arising from the event");
    }
  } catch (error) {
    res.status(500).send({ error: ` ${error}` });
  }
}

module.exports = {
  register,
  update,
};
