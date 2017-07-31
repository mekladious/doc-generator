var express = require('express');
var router = express.Router();
var app = express();

var controller = require('./controller');

router.post('/convert', controller.convert);

router.get('/getCompanies', controller.getAllCompanies);
router.get('/getAuditors', controller.getAuditors);

router.get('/getPartners', controller.getPartners);

router.post('/addCompany', controller.addNewCompany);

router.post('/addManager', controller.addManager);

router.post('/addAuditor', controller.addAuditor);

router.post('/addPartner', controller.addPartner);

router.get('/download', function(req, res) { 
    // res.json({dir: __dirname+'/template.docx'});
    var company = req.company;
    res.sendFile(__dirname+'/template.docx');
});

router.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  let sampleFile = req.files.sampleFile;
 
  // Use the mv() method to place the file somewhere on your server 
  sampleFile.mv(__dirname + '/files/wuzzuf.xlsx', function(err) {
    if (err){
      console.log(err);
      return res.status(500).send(err);
    }
 
    res.send('File uploaded!');
  });
});

router.post('/save', controller.saveDraft);

router.post('/api/xlsx',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

module.exports = router;