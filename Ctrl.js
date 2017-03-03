let app = require('../server.js') ;
let db = app.get('db');

module.exports = {
  getItems: function(req, res) {
    db.get_All(function(err, result) {
      res.status(200).send(result);
    });
  },
  addItem: function(req, res) {
    db.add_todo(req.body.title, function(err, result) {
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
