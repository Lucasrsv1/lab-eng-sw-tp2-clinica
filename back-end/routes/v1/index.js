const { Router } = require("express");

const enderecosRouter = require("./enderecos");
const loginRouter = require("./login");

const router = Router();

// ============= Rotas ============= //

router.use("/enderecos", enderecosRouter);

router.use(loginRouter);

module.exports = router;
