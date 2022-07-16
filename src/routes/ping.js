const express = require('express');
const PingController = require('../controller/pingcontroller');
const PingService = require('../service/pingservice');
const router = express.Router();

router.get('/', function(req, res, next) {
    let pingService = new PingService();
    let pingController = new PingController(pingService);
    let ret = pingController.pong();
    res.send(ret);  
});

module.exports = router;