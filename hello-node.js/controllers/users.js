const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    console.log(req.body);
    res.json({message: "This is the products part."});
});

module.exports = router;