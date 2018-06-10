const express = require('express')
const router = express.Router()
const Profile = require('../models/profile')

/**
 * @api {get} /:userId
 * @apiName GetProfileWithUserId
 * @apiDescription Returns the profile with the corresponding user identification
 * @apiParam {String} userId Mandatory The user ID linked to the profile
 * @apiSuccess {String} userId
 * @apiSuccess {String} profileId The profile identification
 * @apiSuccess {String} firstName The first name of the profile
 * @apiSuccess {String} lastName The last name of the profile
 * @apiSuccess {Number} points The amount of points the profile has accumulated
 * @apiSuccess {Number} questionsAsked The amount of questions the profile has asked
 * @apiSuccess {Number} questionsAnswered The amount of questions the profile has answered
 */
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
