const { Router } = require("express");

const PacientesController = require("../../controllers/pacientes");

const router = Router();

router.get("/", PacientesController.getAll);

router.post("/", PacientesController.insert.validations, PacientesController.insert);

module.exports = router;
