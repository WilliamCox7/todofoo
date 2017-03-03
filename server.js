var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config.js');
var massive = require('massive');
var port = 3000;

var app = module.exports = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var massiveInstance = massive.connectSync({
  connectionString: 'postgres://wzltlsrp:I-xleOsrgRuZrC-c3ABQJi6fSFijXdSy@tantor.db.elephantsql.com:5432/wzltlsrp'
});

app.set('db', massiveInstance);
var db = app.get('db');

let Ctrl = require('./Ctrl.js');

app.get('/items', Ctrl.getItems);
app.post('/addItem', Ctrl.addItem);
app.put('/updateItem', Ctrl.updateItem);
app.delete('/deleteItem', Ctrl.deleteItem);

app.listen(port, function() {
  console.log('port ' + port + ' is listening');
});
