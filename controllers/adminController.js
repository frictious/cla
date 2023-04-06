exports.dashboard = (req, res) => {
    res.render("admin/index", {
        title : "School Admin Dashboard"
    });
}

// TEACHERS SECTION
// GET ALL TEACHERS
exports.teachers = (req, res) => {
    res.render("admin/teachers", {
        title : "List of teachers"
    });
}

// ADD NEW TEACHER FORM
exports.addTeacher = (req, res) => {
    res.render("admin/add-teacher", {
        title : "Add new teacher"
    });
}

// ADD NEW TEACHER FORM LOGIC
exports.addTeacherLogic = (req, res) => {
    res.send("<h1>TEACHER ADDED</h1>");
}
// END OF TEACHERS SECTION
