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
    console.log(id);
    const data = await req.body;
    const agendaDB = await Agenda.updateOne(
      { _id: id },
      { $set: { title: data.title, startDate: data.start, endDate: data.end } }
    );
    res.status(202).json(agendaDB);
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
