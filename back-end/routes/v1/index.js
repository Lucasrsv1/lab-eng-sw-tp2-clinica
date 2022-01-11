const { Router } = require("express");

const enderecosRouter = require("./enderecos");
const funcionariosRouter = require("./funcionarios");
const loginRouter = require("./login");
const pacientesRouter = require("./pacientes");

const router = Router();

// ============= Rotas ============= //

router.use("/enderecos", enderecosRouter);

router.use("/funcionarios", funcionariosRouter);

router.use("/pacientes", pacientesRouter);

router.use(loginRouter);

module.exports = router;
