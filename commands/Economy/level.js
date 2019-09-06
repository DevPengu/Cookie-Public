const Discord = require("discord.js");
let Xp = require("../../models/level.js");
const mongoose = require("../../utils/mongoose");
module.exports.run = async (bot, message, args) => {
  Xp.findOne({
    userID: message.author.id,
    username: message.author.username,
    guildID: message.guild.id,
    guildName: message.guild.name
  },

  (err, Xp) => {
  if(err) console.log(err);

    let embed = new Discord.RichEmbed()
    .setColor("#FF00FF");  
 if(!Xp) {
   embed.addField("Rip, you have no xp. Keep chatting!", "0", true);
   return message.channel.send(embed);
      }else{
        embed.addField("Your current level is", Xp.level, true)
        embed.addField("Your current xp value is", Xp.xp, true)
        return message.channel.send(embed);
      }
  })
}

module.exports.help = {
  name: "level",
  description: "What level are you?",
  module: "Economy"
} 
