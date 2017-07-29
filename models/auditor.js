var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var auditorSchema = new Schema({
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    name: String,
    address: String
}, { collection: 'auditors' });

var Auditor = mongoose.model('Auditor', auditorSchema);
module.exports = Auditor;