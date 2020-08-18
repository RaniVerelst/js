const express = require("express");
const router = express.Router();
const todosController = require("../../../controllers/api/v1/todos");

router.get("/", todosController.getAll);

/* /api/v1/todos */
router.post("/", todosController.create);

module.exports = router;