const   express             = require("express"),
        Index               = require("./routes/index"),
        Admin               = require("./routes/admin");

// CONFIG
const app = express();

require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static("public"));

// ROUTES
app.use("/", Index);
app.use("/admin", Admin);

// SERVER
app.listen(process.env.PORT, () => {
    console.log(`Server Started on PORT ${process.env.PORT}`);
});
