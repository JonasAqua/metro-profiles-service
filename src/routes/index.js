const express = require('express')
const router = express.Router()
const Profile = require('../models/profile')

router.get('/:userId', (req, res, next) => {
  Profile.getByUserId(req.params.userId).
    then(profile => {
      res.json(profile)
    }).
    catch(err => {
      next(err)
    })
})

router.post('/:userId/increasePoints', (req, res, next) => {
  Profile.getByUserId(req.params.userId).then(profile => {
    profile.increasePointsBy(req.body.pointsAmount).then(profile => {
      res.json(profile)
    })
  }).
  catch(err => {
    next(err)
  })
})

module.exports = router
