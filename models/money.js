const mongoose = require('mongoose');

const moneySchema = mongoose.Schema({
  userID: String,
  guildID: String,
  money: Number,
  cooldown: Number,
});

module.exports = mongoose.model('money', moneySchema);
