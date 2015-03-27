module.exports = function(app) {
  var express = require('express');
  var testModelRouter = express.Router();

  testModelRouter.get('/', function(req, res) {
    res.send({
      'test-model': []
    });
  });

  testModelRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  testModelRouter.get('/:id', function(req, res) {
    res.send({
      'test-model': {
        id: req.params.id,
        nested: "1"
      }
    });
  });

  testModelRouter.put('/:id', function(req, res) {
    res.send({
      'test-model': {
        id: req.params.id
      }
    });
  });

  testModelRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/testModels', testModelRouter);
};
