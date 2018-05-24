var router = require('express').Router()
var Logs = require('../models/log')

//GET ALL
router.get('/api/logs', (req, res, next) => {

  if (!req.session.user.hasAccess('Admiral')){
    return res.status(401).send('Not Authorised')
  }

  Logs.find(req.query)
    .then(logs => {
      res.status(200).send(logs)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//GET BY Ship ID
router.get('/api/logs/:shipId', (req, res, next) => {
  Logs.find({ ShipId: req.params.shipId })
    .then(logs => {
      res.status(200).send(logs)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//GET BY Ship User ID
router.get('/api/logs/:UserId', (req, res, next) => {
  Logs.find({ userId: req.params.UserId })
    .then(logs => {
      res.status(200).send(logs)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//ADD
router.post('/api/logs', (req, res, next) => {
  var log = req.body
  Logs.create(log)
    .then(newLog => {
      res.status(200).send(newLog)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//EDIT
router.put('/api/logs/:id', (req, res, next) => {
  Logs.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(log => {
      res.status(200).send({ message: "Successfully Updated", log })
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = {
  router
}