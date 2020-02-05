var express = require('express')
var router = express.Router()
const service = require('./../services/resources')

router.get('/resources', (req, res, next) => service
  .get()
  .then(item => res.status(200).send(item))
  .catch(next))

router.get('/resources/:id', (req, res, next) => service
  .index(req.params.id)
  .then(item => res.status(200).send(item))
  .catch(next))

router.post('/resources', (req, res, next) => service
  .create(req)
  .then(item => res.status(200).send(item))
  .catch(next))

router.put('/resources/:id', (req, res, next) => service
  .put(req)
  .then(item => res.status(200).send(item))
  .catch(next))

router.delete('/resources/:id', (req, res, next) => service
  .delete(req.params.id)
  .then(() => res.status(200).send())
  .catch(next))


module.exports = router;
