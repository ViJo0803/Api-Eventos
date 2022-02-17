const { Router } = require("express");
const {createEventos,getEvent,updateEvent } = require("./Controllers/eventos.js");
const{validateCreate}=require('./Validators/eventos');
const router = Router();


router.post("/create",validateCreate, createEventos);
router.get("/get", getEvent);
router.put("/update", updateEvent);


module.exports = router;
