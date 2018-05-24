var router = require('express').Router()
var Ships = require('../models/ship')

router.get('/api/ships', (req,res, next) =>{
  Ships.find(req.query)
    .then(ships => {
      res.status(200).send(ships)
    })
    .catch(err =>{
      res.status(400).send(err)
    })
})

router.post('/api/ships', (req,res,next)=>{
  var ship = req.body
  Ships.create(ship)
  .then(newShip =>{
    res.status(200)
.send(newShip)
  })
  .catch(err =>{
    res.status(400).send(err)
    })
})

module.exports = {
  router
}