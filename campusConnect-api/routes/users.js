var router = require("express").Router();

const userCtrl = require("../controllers/users.js");

router.post("/new", userCtrl.createNewUser);
router.get("/getAllUsuarios", userCtrl.getAllUsuarios);

module.exports = router;
