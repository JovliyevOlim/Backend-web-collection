const express = require("express");

const { createItem ,getAllItems} = require("../Controllers/Item");

const router = express.Router();

router.post("/",createItem);

router.get("/",getAllItems);

router.put("/update/item");

// router.delete("/:id");

module.exports = router;
