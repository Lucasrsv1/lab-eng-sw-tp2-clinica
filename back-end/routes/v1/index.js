const { Router } = require("express");

const enderecosRouter = require("./enderecos");
const funcionariosRouter = require("./funcionarios");
const loginRouter = require("./login");

const router = Router();

// ============= Rotas ============= //

router.use("/enderecos", enderecosRouter);

router.use("/funcionarios", funcionariosRouter);

router.use(loginRouter);

module.exports = router;
