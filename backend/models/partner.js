var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partnerSchema = new Schema({
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    name: String,
    title: String,
    email: String
});

var Partner = mongoose.model('Partner', partnerSchema);
module.exports = Partner;