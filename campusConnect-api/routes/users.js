var router = require("express").Router();

const userCtrl = require("../controllers/users.js");

router.post("/new", userCtrl.createNewUser);

module.exports = router;
