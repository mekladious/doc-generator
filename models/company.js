var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
    name: {
        type:String,
        unique: true
    },
    description: String,
    address: String,
    register: {
        type:Number,
        unique: true
    },
}, { collection: 'companies' });

var Company = module.exports = mongoose.model('Company', companySchema);