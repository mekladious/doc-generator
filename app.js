var express = require('express'),
path = require('path'),
cors = require('cors'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');
config = require('./config/database');

require('./models/company')
require('./models/partner')
require('./models/auditor')
require('./models/manager')

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database '+ config.database);
});

var app = express();

//Routes
var routes = require('./routes');

var port = process.env.PORT || 8080;

app.use(cors());

//Static folder
app.use(express.static(path.join(__dirname + 'public')));
console.log(path.join(__dirname + '/angular-src'));
app.use(express.static(path.join(__dirname + '/angular-src')));

//BodyParser
app.use(bodyParser.json());

app.use('/user', routes);

//Index Route

 app.get('/download', function(req, res) { 
    res.download('./template.docx') 
});

app.get('/', (req, res)=>{
    res.send('Invalid!');
    console.log()
});

app.get('*', (req, res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

//Start Server
app.listen(port, ()=>{
    console.log("Server started on port "+ port);
});
