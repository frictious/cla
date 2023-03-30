const express           = require("express");

const router = express.Router();

// CONFIG

// ROUTES
router.get("/", (req, res) => {
    res.send("<h1>WALA, ADMIN SECTION WORKS</h1>");
});

module.exports = router;
