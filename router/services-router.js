const express = require("express");
const router = express.Router();

const servicesForm = require("../controllers/services-controller");

router.route("/services").get(servicesForm);
module.exports = router;
