let express = require("express");
let router = express.Router();
const { ensureAuthenticated } = require("../../config/auth");

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/gallery", (req, res) => {
    res.render("gallery");
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
    res.render("dashboard", {
        name: req.user.name
    });
});

module.exports = router;
