const express = require("express");
const router = express.Router();
const V1Controller = require("../v1/controller");
const v1Controller = new V1Controller();

router.get("/test/:id", v1Controller.getUserById);
router.put("/test/:id", v1Controller.updateUserById);



module.exports = router;
