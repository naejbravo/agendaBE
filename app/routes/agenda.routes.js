const AgendaRoutes = require("express").Router();

const {
  getAgenda,
  postAgenda,
  deleteAgenda,
  updateAgenda,
} = require("../controllers/agenda.controllers");

AgendaRoutes.get("/", getAgenda);
AgendaRoutes.post("/", postAgenda);
AgendaRoutes.delete("/:id", deleteAgenda);
AgendaRoutes.patch("/:id", updateAgenda);

module.exports = AgendaRoutes;
