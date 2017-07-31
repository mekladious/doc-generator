var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var draftSchema = new Schema({
    company:{},
    auditor:{},
    partners:[{}],
    manager:{}
}, { collection: 'drafts' });

var Draft = mongoose.model('Draft', draftSchema);
module.exports = Draft;