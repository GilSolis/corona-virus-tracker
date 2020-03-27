const router = require("express").Router();

// DELETE route for deleting todos. You can access the todo's id in req.params.id
router.delete("/:id", function(req, res) {});

// PUT route for updating todos. The updated todo will be available in req.body
router.put("/", function(req, res) {});

module.exports = router;
