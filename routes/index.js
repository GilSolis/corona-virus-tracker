const router = require("express").Router();
const categoryApiRoutes = require("./categoryApiRoutes");
const htmlRoutes = require("./htmlRoutes");

router.use("/api", categoryApiRoutes);
router.use(htmlRoutes);

module.exports = router;
