const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-middleware");
router.route("/").get(authController.home);

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

router.route("/user").get(authMiddleware, authController.user);

module.exports = router;
