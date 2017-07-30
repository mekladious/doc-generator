var mongoose = require('mongoose');
var Company = mongoose.model('Company');
var Partner = mongoose.model('Partner');
var Auditor = mongoose.model('Auditor');
var Manager = mongoose.model('Manager');

var mkdirp = require('mkdirp');

var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');

var fs = require('fs');
var path = require('path');

var exec = require('child_process').exec;

var mime = require('mime');

module.exports.convert = [

    // Get company from ID

    function(req, res, next){
        Company.findById(req.body.companyId, (err, company) => {
            if(company){
                req.body.company = company;
                next();
            }
        });
    },

    // Get partner for a specific company and pass them to the next function which generates the files

    function(req, res, next){
        Partner.find({companyId: req.body.companyId}, (err, partners) => {
            if(err) {throw err;}
            if(partners){
                req.body.partners = partners;
                 next();
            }else{
                console.log("partner");
                res.json({
                    error: {
                        msg: 'No partners are found for this business'
                    }
                });
            }
        });

    },

    // Get Manager for a specific company and pass them to the next function which generates the files

    function(req, res, next){
        Manager.findOne({companyId: req.body.companyId}, (err, manager) => {
            if(err) {throw err;}
            if(manager){
                req.body.manager = manager;
                 next();
            }else{
                console.log("manager");
                res.json({
                    error: {
                        msg: 'No managers are found for this business'
                    }
                });
            }
        });

    },
    
    function(req, res, next){
        Auditor.findOne({companyId: req.body.companyId}, (err, auditor) => {
            if(err) {throw err;}
            if(auditor){
                req.body.auditor = auditor;
                 next();
            }else{
                console.log("auditor");
                res.json({
                    error: {
                        msg: 'No managers are found for this business'
                    }
                });
            }
        });

    },

    function(req, res, next){

        if(fs.existsSync(__dirname + '/files/' + req.body.company.name + '.docx')){
            fs.unlinkSync(__dirname + '/files/' + req.body.company.name + '.docx');
        }
        // console.log(req.body);
        var file = req.body;
        var auditor = file.auditor;
        auditor.type = "مراقب حساباتl";
        //var partners = file.partners;
        var manager = file.manager;
        manager.type = "مدير";
        var date = req.body.day+"/"+req.body.month+"/"+req.body.year;
        var day = req.body.dayName;
        var meetingtype = file.meetingtype;

        var partners = [
            {name:"mira", address:"123"},
            {name:"medhat", address:"123"}
        ];

        var companytype = (req.body.company.type=="limited")? "ذات مسئولية محدودة":"شركة مساهمة مصرية";
        var partnertype = (req.body.company.type=="limited")? "مالك حصص":"مالك أسهم";
        var managertype = (req.body.company.type=="limited")? "مدير":"رئيس مجلس الإدارة / عضو مجلسس الإدارة";
        //Load the docx file as a binary
        var content = fs
            .readFileSync(path.resolve(__dirname, 'files/template.docx'), 'binary');

        var zip = new JSZip(content);

        var doc = new Docxtemplater();
        doc.loadZip(zip);

        //set the templateVariables

        var employees = [];
        employees = employees.concat(partners);
        employees.push(manager);
        employees.push(auditor);

        console.log(file);
        console.log(employees);
        console.log(partners);
        console.log(meetingtype);

        doc.setData({
            employees: employees,
            company: file.company.name,
            manager: manager.name,
            partners: partners,
            auditor: auditor.name,
            date: date, 
            day: day,
            address: file.company.address,
            register: file.company.register,
            meetingtype: meetingtype,
            agenda:"jjmk",
            companytype: companytype
        });
        // console.log('here')
        try {
            // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
            doc.render()
        }
        catch (error) {
            var e = {
                message: error.message,
                name: error.name,
                stack: error.stack,
                properties: error.properties,
            }
            // console.log(JSON.stringify({error: e}));
            // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
            throw error;
        }

        var buf = doc.getZip()
                    .generate({type: 'nodebuffer'});

        // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
        fs.writeFileSync(path.resolve(__dirname, 'files/'+req.body.company.name+".docx"), buf);
        
        next();
    },

    function(req, res){
        var company = req.body.company.name;
        res.sendFile(__dirname + '/files/' + company + '.docx');
    }

];

module.exports.getAllCompanies = function(req, res){

    Company.find().exec(function(err, companies){
       if (err) {
            return res.json({
                error: {
                    msg: 'Error finding Companies'
                }
            });
        } else{
            if(companies){
                req.body.companies = companies;
                res.json({companies: companies});
            } else {
                res.json({
                    error: {
                        msg: 'Database is empty'
                    }
                });
            }
        }
    })

};

module.exports.getAuditors = function(req, res){

    Auditor.find().exec(function(err, companies){
       if (err) {
            return res.json({
                error: {
                    msg: 'Error finding Companies'
                }
            });
        } else{
            if(companies){
                req.body.companies = companies;
                res.json({companies: companies});
            } else {
                res.json({
                    error: {
                        msg: 'Database is empty'
                    }
                });
            }
        }
    })

};

module.exports.getPartners = function(req, res){

    var companyId = req.body.companyId;
    Partner.findById({companyId: companyId}).then(function(companies){
        if(partners){
            req.body.partners = partners;
            res.json({partners: partners});
        } else {
            res.json({
                error: {
                    msg: 'Database is empty'
                }
            });
        }
    })

};

module.exports.addNewCompany = [
    function(req, res, next){

        console.log(req.body.body.partners);
        console.log(req.body);
        req.body= req.body.body;
        Company.findOne({name: req.body.newCompany.name}, function(err, company) {
            if (err) {
                return res.json({
                    error: {
                        msg: err.message
                    }
                });
            }
            if(company){
                console.log(company)
                return res.json({
                    error: {
                        msg: "A company with the same name already exists"
                    }
                });
            }else{
                next();
            }
        })
    },

    function(req, res, next){
        Company.create(req.body.newCompany, function(err, company) {
            if (err) {

        console.log(req.body.body.newCompany.partners);
                return res.json({
                    error: {
                        msg: err.message
                    }
                });
            }
            req.body.newAuditor.companyId = company._id;
            req.body.newManager.companyId = company._id;
            req.body.companyId = company._id;
            // req.body.newPartner.companyId = company._id;
            next();
        })
    },

    function(req, res, next){
        Manager.create(req.body.newManager, function(err) {
            if (err) {
                return res.json({
                    error: {
                        msg: err.message
                    }
                });
            }
            next();
        })
    },

    function(req, res, next){
        var partners = req.body.partners;
        console.log("here");
        for(i=0; i<req.body.partners.length; i++){
            partners[i].companyId= req.body.companyId;
            Partner.create(partners[i], function(err) {
                if (err) {
                    return res.json({
                        error: {
                            msg: err.message
                        }
                    });
                }
                next();
            })
        }
    },

    function(req, res){
        Auditor.create(req.body.newAuditor, function(err) {
            if (err) {
                return res.json({
                    error: {
                        msg: err.message
                    }
                });
            }
            return res.json({
                msg: 'Company has been added successfully'
            });
        })
    }
];

module.exports.addCompany = function(req, res){
    Company.create(req.body.newCompany, function(err) {
        if (err) {
            return res.json({
                error: {
                    msg: err.message
                }
            });
        }
        return res.json({
            msg: 'Company has been added successfully'
        });
    })
};

module.exports.addPartner = function(req, res){
    Partner.create(req.body.newPartner, function(err) {
        if (err) {
            return res.json({
                error: {
                    msg: err.message
                }
            });
        }
        return res.json({
            msg: 'Partner has been added successfully'
        });
    })
};

module.exports.addAuditor = function(req, res){
    Auditor.create(req.body.newAuditor, function(err) {
        if (err) {
            return res.json({
                error: {
                    msg: err.message
                }
            });
        }
        return res.json({
            msg: 'Auditor has been added successfully'
        });
    })
}

module.exports.addManager = function(req, res){
    Manager.create(req.body.newManager, function(err) {
        if (err) {
            return res.json({
                error: {
                    msg: err.message
                }
            });
        }
        return res.json({
            msg: 'Manager has been added successfully'
        });
    })
}

module.exports.test = (req, res) => {
    res.download(__dirname, '/files/template.docx');
}