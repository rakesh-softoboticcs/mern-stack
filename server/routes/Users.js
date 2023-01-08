const express = require("express");
const router = express.Router();
const { CreateUserController,GetUserController } = require("../controller/Users");

router.post("/register", CreateUserController);
router.post('/login',GetUserController)

module.exports = router;
