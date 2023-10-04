const express = require("express");
require("dotenv").config();

const Routes = require("./routes/index");
const PORT =  3000;
const app = express();

app.use("/",Routes)



app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})





