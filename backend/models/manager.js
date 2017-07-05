var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var managerSchema = new Schema({
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    name: String,
    title: String,
    email: String
});

var Manager = mongoose.model('Manager', managerSchema);
module.exports = Manager;