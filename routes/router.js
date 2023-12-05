const express = require("express");
const router = express.Router();
const controllers = require("../controllers/patientController");

//Routes
router.post("/patient/login", controllers.patientlogin);
router.post("/patient/register", controllers.patientregister);
module.exports = router;