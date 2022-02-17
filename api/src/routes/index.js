const { Router } = require("express");

const Users = require("./users.js");
const Eventos = require("./evento.js");


const router = Router();

router.use("/user", Users);
router.use("/evento", Eventos);


module.exports = router;
