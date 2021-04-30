const router = require("express").Router();
const { vote } = require("../controllers/secured.controller");
const alreadyVoted = require("../helpers/checkAlreadyVoted");

router.post("/vote", alreadyVoted, vote);

module.exports = router;
