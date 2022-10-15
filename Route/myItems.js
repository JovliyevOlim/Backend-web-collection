const express = require("express");

const {
  createItem,
  getAllItems,
  updateItem,
  getItems,
  deleteItem,
} = require("../Controllers/Item");

const router = express.Router();

router.post("/", createItem);

router.get("/", getAllItems);


router.delete("/:id", deleteItem);

router.get("/", getItems);

router.put("/:id", updateItem);

module.exports = router;
