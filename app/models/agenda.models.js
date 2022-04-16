const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const agendaSchema = new Schema(
  {
    title: { type: "String" },
    startDate: { type: "Date" },
    endDate: { type: "Date" },
  },
  { timestamps: true }
);

const Agenda = mongoose.model("agenda", agendaSchema);
module.exports = Agenda;
