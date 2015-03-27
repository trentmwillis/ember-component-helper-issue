module.exports = function(app) {
  var express = require('express');
  var nestedModelRouter = express.Router();

  nestedModelRouter.get('/', function(req, res) {
    res.send({
      'nested-model': []
    });
  });

  nestedModelRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  nestedModelRouter.get('/:id', function(req, res) {
    res.send({
      'nested-model': {
        id: req.params.id,
        componentType: 'test-component'
      }
    });
  });

  nestedModelRouter.put('/:id', function(req, res) {
    res.send({
      'nested-model': {
        id: req.params.id
      }
    });
  });

  nestedModelRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/nestedModels', nestedModelRouter);
};
