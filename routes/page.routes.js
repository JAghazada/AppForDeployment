const { HomePageController, AdminPageController } = require("../controllers/page.controller");



const router = require("express").Router();

router.get("/",HomePageController);
router.get("/admin",AdminPageController);




module.exports = router;