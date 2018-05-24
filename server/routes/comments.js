var router = require('express').Router()
var Comments = require('../models/comment')

//GET BY Log ID
router.get('/api/comments/:UserId', (req, res, next)=>{
  Comments.find({logId: req.params.UserId})
    .then(comments =>{
      res.status(200).send(comments)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//ADD
router.post('/api/comments', (req, res, next) => {
  var log = req.body
  Comments.create(log)
    .then(newComment => {
      res.status(200).send(newComment)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//EDIT
router.put('/api/comments/:id', (req, res, next) => {
  Comments.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(comment => {
      res.status(200).send({message: "Successfully Updated", comment})
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = {
  router
}