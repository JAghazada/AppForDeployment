const express = require("express");
require("dotenv").config();
const Routes = require("./routes/index");
const PORT = 3000;
const app = express();

// Set 'ejs' as the view engine
app.set("view engine","ejs");

app.use("/", Routes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
});
