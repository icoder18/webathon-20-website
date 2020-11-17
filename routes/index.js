const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get("/",homeController.home);
router.get("/map-explorer",homeController.map);
router.get("/assess-yourself",homeController.assess);
router.post("/assess-yourself/result",homeController.results);

module.exports = router;