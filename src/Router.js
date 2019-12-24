const router = require("express").Router();

router.get("/ping", (req, res) => res.status(200).send("pong"))

module.exports = router;