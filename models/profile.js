const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  userID: String,
  guildID: String,
  money: Number,
  cooldown: Number,
  level: Number,
  xp: Number,
  xpToLevel: Number,
});

module.exports = mongoose.model('Profile', profileSchema);
