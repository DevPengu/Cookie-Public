const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
   var DAD = new Discord.RichEmbed()
      .setDescription('Please donate to https://www.patreon.com/vampymaria to keep the bot up and running!')

      .setColor("0x#FF0000")

      message.channel.send(DAD);
  }

  module.exports.help = {
    name: "donate",
    description: "Help me keep my bot alive!",
    module: "Support"
  }
  