var express = require("express");
var router = expressRouter();

router.get('/', function (res, req) {
    res.render('index');
})