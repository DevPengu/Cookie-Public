const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  ownerID: String,
  prefix: String,
  welcomeChannel: String,
  welcomeMsg: String,
  modRole: String,
  adminRole: String,
});

module.exports = mongoose.model('Guild', guildSchema);
