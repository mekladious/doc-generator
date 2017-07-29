var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partnerSchema = new Schema({
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    name: String,
    address: String
}, { collection: 'partners' });

var Partner = mongoose.model('Partner', partnerSchema);
module.exports = Partner;