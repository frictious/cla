const   express                 = require("express"),
        adminController         = require("../controllers/adminController");

const router = express.Router();

// CONFIG

// ROUTES
router.get("/", adminController.dashboard);

module.exports = router;
