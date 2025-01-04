const express = require("express");
const { getClinics } = require("../controllers/clinicController");
const router = express.Router();

router.get("/", getClinics);

module.exports = router;
