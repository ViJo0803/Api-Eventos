const { Router } = require("express");
const {
  createUser,
  getUser,
  updateUser,

} = require("./Controllers/Users.js");

const{validateCreate}=require('../routes/Validators/users')
const router = Router();

router.post("/create",validateCreate, createUser);
router.get("/get", getUser);
router.put("/update", updateUser);

module.exports = router;
