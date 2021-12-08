import express = require("express");

const router = express.Router();

router.post("/form", (req, res) => {
    console.log('Input 1 (String of length 3): ', req.body.input1);
    console.log('Input 2 (String containing [a-z]): ', req.body.input2);
    console.log('Input 3 (String containing [0-9]): ', req.body.input3);
    console.log('Input 4 (String containing [A-Z]): ', req.body.input4);
    res.redirect("/");
});

router.get("/", (req, res) => {
    res.render("home", { docTitle: "Testing Project" });
});

export {router};
