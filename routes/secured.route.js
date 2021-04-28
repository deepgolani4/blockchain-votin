const router = require("express").Router();
const { vote } = require("../controllers/secured.controller");

router.post("/vote", vote);

module.exports = router;
