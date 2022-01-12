const { Router } = require("express");

const agendamentosController = require("../../controllers/agendamentos");

const router = Router();

router.get("/", agendamentosController.getAll);

router.get("/usuario", agendamentosController.getByUser.validations, agendamentosController.getByUser);

router.post("/", agendamentosController.insert.validations, agendamentosController.insert);

module.exports = router;
