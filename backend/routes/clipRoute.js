const express = require("express");
const router = express.Router();
const Clipbit = require("../models/clipbit");

router.get("/clip", async (req, res) => {
  try {
    Clipbit.find({}, function (e, clp) {
      res.json(clp)
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      error: err
    });
  }
})


router.get("/clipbits/:tag", async (req, res) => {
    const { tag } = req.params
    try {
      Clipbit.find({ClipTag: tag}, function (req, clip) {
        res.json(clip);
      })
    } catch (e) {
      res.status(500).send({
        success: false,
        error: e
      });
    }
  })

module.exports = router;