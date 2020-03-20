const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("pages/home");
});

router.get("/login", (req, res) => {
  res.render("pages/login");
});

module.exports = router;
