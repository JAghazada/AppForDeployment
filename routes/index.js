// const Router = require("express").Router();
const express = require("express");
const router = express.Router();
const PageRoutes = require("./page.routes");



router.use(PageRoutes);


module.exports = router;



