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

async function updateEvent(req, res) {
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

async function deleteEvent(req, res) {
  const { id } = req.params;

  try {
    const event = await Event.destroy({ where: { id } });
    if (event) {
      res.status(200).send({ message: "Event was deleted successfully!" });
    } else {
      throw new Error("problem arising from the event");
    }
  } catch (error) {
    res.status(500).send({ error: ` ${error}` });
  }
}

async function getAllEvents(req, res) {
  try {
    const events = await Event.findAll();
    if (events) {
      res.status(200).send({ events });
    } else {
      throw new Error("problem arising from the event");
    }
  } catch (error) {
    res.status(500).send({ error: ` ${error}` });
  }
}

async function getEvent(req, res) {
  const { id } = req.params;

  try {
    const event = await Event.findOne({ where: { id } });
    if (event) {
      res.status(200).send({ event });
    } else {
      throw new Error("problem arising from the event");
    }
  } catch (error) {
    res.status(500).send({ error: ` ${error}` });
  }
}

module.exports = {
  register,
  updateEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
};
