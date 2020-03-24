const router = require("express").Router();
const placesRoutes = require("./places");
const todoRoutes = require("./todos");
const prayerRoutes = require("./prayers");

router.use("/places", placesRoutes);
router.use("/todos", todoRoutes);
router.use("/prayers", prayerRoutes);

module.exports = router;
