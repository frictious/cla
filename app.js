const   express             = require("express"),
        Index               = require("./routes/index");

// CONFIG
const app = express();

require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static("public"));

// ROUTES
app.use("/", Index);

// SERVER
app.listen(process.env.PORT, () => {
    console.log(`Server Started on PORT ${process.env.PORT}`);
});
