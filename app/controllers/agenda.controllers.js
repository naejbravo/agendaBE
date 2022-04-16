const Agenda = require("../models/agenda.models");

const getAgenda = async (req, res, next) => {
  try {
    const agendaDB = await Agenda.find();
    return res.status(200).json(agendaDB);
  } catch (error) {
    next(error);
    return;
  }
};

const postAgenda = async (req, res, next) => {
  try {
    const event = await new Agenda(req.body);
    const agendaDB = await event.save();
    res.status(200).json(agendaDB);
  } catch (error) {
    next(error);
    return;
  }
};

const deleteAgenda = async (req, res, next) => {
  try {
    const { id } = await req.params;
    const agendaDB = await Agenda.deleteOne({ _id: id });
    res.status(202).json(agendaDB);
  } catch (error) {
    next(error);
    return;
  }
};

const updateAgenda = async (req, res, next) => {
  try {
    const { id } = await req.params;
    const data = await req.body;

    let update = {
      $set: {
        title: data.title,
        startDate: data.startDate,
        endDate: data.endDate,
      },
    };
    const agendaDB = await Agenda.updateOne({ _id: id }, update);
    res.status(202).json(data);
  } catch (error) {
    next(error);
    return;
  }
};

module.exports = {
  getAgenda,
  postAgenda,
  deleteAgenda,
  updateAgenda,
};
