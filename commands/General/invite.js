const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
const embed = {
  "description": "Invite Cookie using [this link](https://discordapp.com/oauth2/authorize?client_id=425737134050246656&scope=bot&permissions=842398839)",
  "color": 15848695
};
message.channel.send({ embed });

}

module.exports.help = {
  name: "invite",
  description: "Invite Cookie!",
  module: "General"
  }
