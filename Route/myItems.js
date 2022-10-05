const express = require("express");

const { createItem } = require("../Controllers/Item");

const router = express.Router();

router.post("/new/item",createItem);

router.get("/items");

router.update("/update/item");

router.delete("/:id");

module.exports = router;
