const express = require("express");
const router = express.Router();

const blogForm = require("../controllers/blog-controller");

router.route("/blog").get(blogForm);
module.exports = router;
