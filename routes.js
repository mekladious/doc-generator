var express = require('express');
var router = express.Router();
var app = express();

var controller = require('./controller');

router.post('/convert', controller.convert);

router.get('/getCompanies', controller.getAllCompanies);
router.get('/getAuditors', controller.getAuditors);

router.get('/getPartners', controller.getPartners);

router.post('/addCompany', controller.addCompany);

router.post('/addManager', controller.addManager);

router.post('/addAuditor', controller.addAuditor);

router.post('/addPartner', controller.addPartner);

router.get('/download', function(req, res) { 
    // res.json({dir: __dirname+'/template.docx'});
    var company = req.company;
    res.sendFile(__dirname+'/template.docx');
});

module.exports = router;