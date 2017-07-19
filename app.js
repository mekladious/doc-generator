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
app.use(express.static(path.join(__dirname, 'public')));

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
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Start Server
app.listen(port, ()=>{
    console.log("Server started on port "+ port);
});
