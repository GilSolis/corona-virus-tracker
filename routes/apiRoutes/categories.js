const router = require("express").Router();
const db = require('../../models')

router.get("/", function (req, res) {
    db.Category.findAll({
        include: [db.Place]
    })
        .then(function (dbCategory) {
            res.json(dbCategory);
        })
});


router.get("/:id", function (req, res) {
    db.Category.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Place]
    }).then(function (dbCategory) {
        res.json(dbCategory);
    })
});

router.post("/", function (req, res) {
    db.Category.create(req.body).then(function (dbCategory) {
        res.json(dbCategory);
    });
});

router.delete("/:id", function (req, res) {
    db.Category.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbCategory) {
        res.json(dbCategory);
    });
});

module.exports = router;
