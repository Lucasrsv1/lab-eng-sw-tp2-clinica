const { Router } = require("express");

const EnderecoController = require("../../controllers/enderecos");

const router = Router();

router.get("/", EnderecoController.getAll);

router.post("/", EnderecoController.insert.validations, EnderecoController.insert);

module.exports = router;
