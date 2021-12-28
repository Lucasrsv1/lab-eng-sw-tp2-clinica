const { Router } = require("express");

const loginRouter = require("./login");

const router = Router();

// ============= Rotas ============= //

router.use(loginRouter);

module.exports = router;
