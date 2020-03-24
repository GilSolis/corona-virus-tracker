const db = require("../../models");
const router = require("express").Router();

//get all prayers
router.get("/", function(req, res) {
  db.Prayer.findAll({
    limit: parseInt(req.query.limit) || 10,
    offset: parseInt(req.query.offset) || 0
  }).then(function(results) {
    res.json(results);
  });
});

//Add a prayer
router.post("/", function(req, res) {
  db.Prayer.create(req.body).then(function(results) {
    //   console.log(results);
    res.end();
  });
});

module.exports = router;
