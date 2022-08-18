const express = require("express");
const router = express.Router();
const Bookbit = require("../models/bookbit");

router.get("/book", async (req, res) => {
  try {
    Bookbit.find({}, function (e, book) {
      res.json(book)
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      error: err
    });
  }
})

router.get("/bookbits/:genre", async (req, res) => {

  const { genre } = req.params;

  try {
    Bookbit.find({genre: genre}, function (e, book) {
      res.json(book)
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      error: err
    });
  }
})

module.exports = router;