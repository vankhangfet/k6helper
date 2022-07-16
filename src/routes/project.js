const express = require('express');
const router = express.Router();
const ProjectDto = require('../dto/projectdto');
const ProjectService = require('../service/projectservice');


router.get('/:Id', function(req, res, next) {
   let service = new ProjectService();
   
   let project = service.getProjectById(req.params.Id);

    res.status(200).json(project); 
});


router.post('/', function(req, res, next) {
    let projects = [];
 
     res.status(200).json(projects); 
 });

 router.patch('/:Id', function(req, res, next) {
    let projects = [];
 
     res.status(200).json(projects); 
 });

module.exports = router;