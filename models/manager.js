var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var managerSchema = new Schema({
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    name: String,
    address: String
}, { collection: 'managers' });

var Manager = mongoose.model('Manager', managerSchema);
module.exports = Manager;