const express = require("express");
const router = express.Router();

// test route
router.get("/test", (req, res) => {
  console.log("✅ HIT /user/test route");
  res.send("User route working!!");
});

console.log("🔥 user router loaded");
module.exports = router;
