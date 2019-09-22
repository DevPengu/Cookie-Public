const mongoose = require('mongoose');

const levelSchema = mongoose.Schema({
  userID: String,
  guildID: String,
  xp: Number,
  level: Number,
  xpToLevel: Number,
});

module.exports = mongoose.model('level', levelSchema);
