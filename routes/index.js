const   express                 = require("express"),
        indexController         = require("../controllers/indexController");

const route = express.Router();

// INDEX ROUTE
route.get("/", indexController.index);

// ABOUT PAGE
route.get("/about", indexController.about);

// APPOINTMENT PAGE
route.get("/appointment", indexController.appointment);

// CLASSES PAGE
route.get("/classes", indexController.classes);

// CONTACT PAGE
route.get("/contact", indexController.contact);

// FACILITY PAGE
route.get("/facility", indexController.facility);

// TEAM PAGE
route.get("/team", indexController.team);

// TESTIMONIAL PAGE
route.get("/testimonial", indexController.testimonial);

module.exports = route;
