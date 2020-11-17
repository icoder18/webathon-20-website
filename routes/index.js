const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get("/",homeController.home);
router.get("/map-explorer",homeController.map);
<<<<<<< HEAD
router.get("/helpline",homeController.helpline);
=======
router.get("/assess-yourself",homeController.assess);
router.post("/assess-yourself/result",homeController.results);
>>>>>>> 2c7bacbc168fe0c350593e37b16df369fe0bb470

module.exports = router;