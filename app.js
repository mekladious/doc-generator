var express = require('express'),
path = require('path'),
cors = require('cors'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');
config = require('./config/database'),
fileUpload = require('express-fileupload'),
multer  =   require('multer');;

//Multer Configs
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage : storage}).single('applications');

require('./models/company')
require('./models/partner')
require('./models/auditor')
require('./models/manager')
require('./models/draft')

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database '+ config.database);
});

var app = express();

//Routes
var routes = require('./routes');

var port = process.env.PORT || 8080;

app.use(cors());

app.use(fileUpload());

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

//BodyParser
app.use(bodyParser.json());

app.use('/user', routes);

//Index Route

app.get('/', (req, res)=>{
    res.send('Invalid!');
});

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Start Server
app.listen(port, ()=>{
    console.log("Server started on port "+ port);
});
