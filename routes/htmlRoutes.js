const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("pages/home");
});

router.get("/login", (req, res) => {
  res.render("pages/login");
});

router.get("/prayers", (req, res) => {
  res.render("pages/prayers");
});

router.get("/paypal", (req, res) => {
  res.render("partials/home/paypalBtn");
})
module.exports = router;
