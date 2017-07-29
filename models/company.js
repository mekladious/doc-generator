var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
    name: {
        type:String,
        unique: true
    },
    type: String,
    address: String,
    register: {
        type:Number,
        unique: true
    },
}, { collection: 'companies' });

var Company = module.exports = mongoose.model('Company', companySchema);