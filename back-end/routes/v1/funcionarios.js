const { Router } = require("express");

const FuncionariosController = require("../../controllers/funcionarios");

const router = Router();

router.get("/", FuncionariosController.getAll);

router.post("/", FuncionariosController.insert.validations, FuncionariosController.insert);

module.exports = router;
