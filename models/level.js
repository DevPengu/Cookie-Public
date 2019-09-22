const mongoose = require('mongoose');

const levelSchema = mongoose.Schema({
  userID: String,
  guildID: String,
  guildName: String,
  username: String,
  xp: Number,
  level: Number,
});

module.exports = mongoose.model('level', levelSchema);
