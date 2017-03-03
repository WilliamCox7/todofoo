let app = require('./server.js') ;
let db = app.get('db');

module.exports = {
  getItems: function(req, res) {
    db.get_all(function(err, result) {
      console.log(err, result)
      res.status(200).send(result);
    });
  },
  addItem: function(req, res) {
    console.log(req.body);
    db.add_todo(req.body.title, function(err, result) {
      console.log(err)
      res.status(200).send('Added foo!');
    });
  },
  updateItem: function(req, res) {
    db.update_todo(req.body.completed, function(err, result) {
      res.status(200).send('Updated foo!');
    });
  },
  deleteItem: function(req, res) {
    db.delete_todo(req.body.title, function(err, result) {
      res.status(200).send('Deleted foo!');
    });
  }
}
