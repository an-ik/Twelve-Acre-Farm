var express     = require("express");
var router      = express.Router({mergeParams: true});
var router      = express.Router();

//===================== ROOT ROUTE 

router.get("/", function (req, res) {
    res.render("index.html");
});

module.exports = router;