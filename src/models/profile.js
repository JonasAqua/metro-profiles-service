let mongoose = require('mongoose')
let Schema = mongoose.Schema

let profileSchema = new Schema({
  profileId: String,
  userId: String,
  firstName: String,
  lastName: String,
  points: Number,
  questionsAsked: Number,
  questionsAnswered: Number
})

profileSchema.statics.getByUserId = function(userId) {
  return this.
  findOne({userId: userId}).
  exec()
}

profileSchema.statics.getByProfileId = function(profileId) {
  return this.
  findOne({profileId: profileId}).
  exec()
}

profileSchema.methods.increasePointsBy = function(points) {
  this.points += points
  return this.save()
}

const Profile = mongoose.model('Profile', profileSchema)
module.exports = Profile
