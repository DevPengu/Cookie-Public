const mongoose = require("mongoose")

const moneySchema = mongoose.Schema({
  userID: String,
  guildID: String,
  username: String,
  guildName: String,
  money: Number,
  cooldown: Number
})

module.exports = mongoose.model("money", moneySchema);