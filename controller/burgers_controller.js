const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        const hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    });
});

module.exports = router;