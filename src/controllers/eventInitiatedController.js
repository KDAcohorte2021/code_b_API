const { EventInitiated, sequelize } = require("../models");

//CRUD Operations for the EventInitiated Model

//Create
async function registerEventInitiated(req, res, next) {
  const eventInitiatedInput = {
    duration: req.body.duration,
    link: req.body.link,
    code: req.body.code,
    userId: req.body.userId,
    eventId: req.body.eventId,
    themeId: req.body.themeId,
  };

  try {
    const eventInitiated = await EventInitiated.create(eventInitiatedInput);
    if (eventInitiated) {
      res
        .status(201)
        .send({ message: "EventInitiated was registered successfully!" });
    } else {
      throw new Error("problem arising from the eventInitiated");
    }
  } catch (error) {
    res.status(500).send({ error: ` ${error}` });
  }
}

//Read all
async function getAllEventsInitiated(req, res) {
  try {
    const allEventsInitiated = await EventInitiated.findAll();
    if (allEventsInitiated) {
      res.status(200).send({ allEventsInitiated });
    } else {
      throw new Error("problem arising from the event");
    }
  } catch (error) {
    res.status(500).send({ error: ` ${error}` });
  }
}

//Read by id
async function getEventInitiatedById(req, res) {
  const { id } = req.params;

  try {
    const eventInitiated = await Event.findOne({ where: { id } });
    if (eventInitiated) {
      res.status(200).send({ eventInitiated });
    } else {
      throw new Error("problem arising from the event");
    }
  } catch (error) {
    res.status(500).send({ error: ` ${error}` });
  }
}

//Update
async function updateEventInitiated(req, res) {
  const eventInitiatedInput = {
    duration: req.body.duration,
    link: req.body.link,
    code: req.body.code,
    userId: req.body.userId,
    eventId: req.body.eventId,
    themeId: req.body.themeId,
  };
  const { id } = req.params;

  try {
    const newEventInitiated = await EventInitiated.update(eventInitiatedInput, {
      where: { id },
    });
    if (newEventInitiated) {
      res
        .status(200)
        .send({ message: "Event initiated was updated successfully!" });
    } else {
      throw new Error("problem arising from the event initiated");
    }
  } catch (error) {
    res.status(500).send({ error: ` ${error}` });
  }
}

//Delete
async function deleteEventInitiated(req, res) {
  const { id } = req.params;

  try {
    const eventInitiated = await EventInitiated.destroy({ where: { id } });
    if (eventInitiated) {
      res
        .status(200)
        .send({ message: "Event initiated was deleted successfully!" });
    } else {
      throw new Error("problem arising from the event");
    }
  } catch (error) {
    res.status(500).send({ error: ` ${error}` });
  }
}

module.exports = {
  registerEventInitiated,
  updateEventInitiated,
  deleteEventInitiated,
  getAllEventsInitiated,
  getEventInitiatedById,
};
