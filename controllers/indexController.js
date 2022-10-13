// HOMEPAGE
exports.index = (req, res) => {
    res.render("index", {
        title : "Canaan Land Academy | Homepage"
    });
}

// ABOUT PAGE
exports.about = (req, res) => {
    res.render("about", {
        title : "Canaan Land Academy | About Page"
    });
}

// APPOINTMENT
exports.appointment = (req, res) => {
    res.render("appointment", {
        title : "Canaan Land Academy | Appointment"
    });
}

// CLASSES PAGE
exports.classes = (req, res) => {
    res.render("classes", {
        title : "Canaan Land Academy | Classes"
    });
}

// FACILITY PAGE
exports.facility = (req, res) => {
    res.render("facility", {
        title : "Canaan Land Academy | Facilities Page"
    });
}

// OUR TEAM
exports.team = (req, res) => {
    res.render("team", {
        title : "Canaan Land Academy | Team"
    });
}

// TESTIMONIALS
exports.testimonial = (req, res) => {
    res.render("testimonial", {
        title : "Canaan Land Academy | Testimonial"
    });
}

// CONTACT PAGE
exports.contact = (req, res) => {
    res.render("contact", {
        title : "Canaan Land Academy's Contact Page'"
    });
}
