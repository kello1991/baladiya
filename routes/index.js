var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('template/index-video-background');
});

/* GET home page. */
router.get('/election', function (req, res, next) {
    res.render('template/election');
});
/* GET home page. */
router.get('/profile', function (req, res, next) {
    res.render('template/profile');
});

/* GET home page. */
router.get('/validerElection', function (req, res, next) {
    res.render('template/valideElection');
});
router.get('/validation', function (req, res, next) {
    res.redirect('/');
});

/* GET home page. */
router.get('/acteNaissance', function (req, res, next) {
    res.render('template/acteNaissance');
});

/* GET home page. */
router.get('/acteMort', function (req, res, next) {
    res.render('template/acteMort');
});
/* GET home page. */
router.get('/retour', function (req, res, next) {
    res.render('template/index-video-background');
});
module.exports = router;
