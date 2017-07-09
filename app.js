var express = require('express'),
path = require('path'),
cors = require('cors'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

require('./models/company')
require('./models/partner')
require('./models/auditor')
require('./models/manager')

mongoose.connect('mongodb://localhost:27017/db');

mongoose.connection.on('connected', () => {
    console.log('Connected to database '+'mongodb://localhost:27017/companies');
});

var app = express();

//Routes
var routes = require('./routes');

var port = process.env.port || 8080;

app.use(cors());

//Static folder
app.use(express.static(path.join(__dirname + 'public')));
app.use(express.static(path.join(__dirname + 'public/archive')));

//BodyParser
app.use(bodyParser.json());

app.use('/user', routes);

//Index Route

 app.get('/download', function(req, res) { 
    res.download('./template.docx') 
});

app.get('/', (req, res)=>{
    res.send('Invalid!');
});

// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// })

//Start Server
app.listen(port, ()=>{
    console.log("Server started on port "+ port);
});
