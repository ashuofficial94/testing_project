"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
var router = express.Router();
exports.router = router;
router.post("/form", function (req, res) {
    console.log('Input 1 (String of length 3): ', req.body.input1);
    console.log('Input 2 (String containing [a-z]): ', req.body.input2);
    console.log('Input 3 (String containing [0-9]): ', req.body.input3);
    res.redirect("/");
});
router.get("/", function (req, res) {
    res.render("home", { docTitle: "Testing Project" });
});
