const express = require('express'); 
const app = express();

 app.get('/', function(req, res) { 
     res.send('Hello World!') 
});

 app.get('/download', function(req, res) { 
    res.download('./template.docx') 
});

app.listen(3000, function() { 
    console.log('Example app listening on port 3000!') 
});