const express = require("express");
const { getCandidates } = require("../controllers/candidateController");
const { setHeaders } = require("../middlewares/setHeaders");
const router = express.Router();
const wrapAsync = require("../middlewares/wrapAsync");

router.get("/", setHeaders, wrapAsync(getCandidates));

module.exports = router;
