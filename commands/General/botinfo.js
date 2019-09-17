const Discord = require("discord.js")
const config = require("../../config.js")

module.exports.run = async (bot, message, args) => {

    let owner = "VampyMaria#4980, <@330528293843632130>"
    let embed = new Discord.RichEmbed()
    .setDescription(`Here is some bot information`)
    .setColor(`#f7d4f1`)
    .addField("Bot Owner:", owner, true)
    .addField("Developers:", ("<@330528293843632130>"), true)
    .addField("Servers:", bot.guilds.size, true)
    .addField("Created on:", bot.user.createdAt.toDateString(), true)
    .addField("Bot Commands:", bot.commands.size, true)
    .addField("Watching Over:", `${bot.users.size} user's and ${bot.channels.size} channels`)
    .addField("Bite me", "Because I can :P", true)
    
  
    message.channel.send(embed)
  }

  module.exports.help = {
    name: "botinfo",
    description: "Gives some handy bot info!",
    modules: "General"
  }