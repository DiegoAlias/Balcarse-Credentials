const express = require('express');
const router = express.Router();
const {
    welcome,
    credentials
    } = require("../controllers/user-controllers")

router.get ("/home",welcome);

router.get ("/credentials",credentials)

module.exports = router;
