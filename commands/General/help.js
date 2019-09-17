const Discord = require('discord.js');



module.exports.run = async (bot, message, args) => { 
let commands = bot.commands;
  
if (!message.channel.nsfw)
  {
  
  
let embed = new Discord.RichEmbed()
  
        .setAuthor("Bot Help", bot.user.avatarURL)
        .setDescription(`Command Help.\n`)
        .setColor("#f7d4f1")
        .addField("Fun", `${bot.commands.filter(cmd => cmd.help.module === 'Fun').map(cmd => `\`${cmd.help.name}\``).join(", ")}`)
        .addField("Config", `${bot.commands.filter(cmd => cmd.help.module === 'Config').map(cmd => `\`${cmd.help.name}\``).join(", ")}`)
        .addField("Fun Facts", `${bot.commands.filter(cmd => cmd.help.module === 'Fun Facts').map(cmd => `\`${cmd.help.name}\``).join(", ")}`)
        .addField("Economy", `${bot.commands.filter(cmd => cmd.help.module === 'Economy').map(cmd => `\`${cmd.help.name}\``).join(", ")}`)
        .addField("Support", `${bot.commands.filter(cmd => cmd.help.module === 'Support').map(cmd => `\`${cmd.help.name}\``).join(", ")}`)
        .addField("Reactions", `${bot.commands.filter(cmd => cmd.help.module === 'Reactions').map(cmd => `\`${cmd.help.name}\``).join(", ")}`)
        .addField("General", `${bot.commands.filter(cmd => cmd.help.module === 'General').map(cmd => `\`${cmd.help.name}\``).join(", ")}`)
        .addField("NSFW", `Run this command in an nsfw channel ;)`)
        .addField("Photos", `${bot.commands.filter(cmd => cmd.help.module === 'Photos').map(cmd => `\`${cmd.help.name}\``).join(", ")}`)
        .addField("Join our support discord!", "https://discord.gg/p4nBaZC")
        .setFooter(`Requested by: ${message.author.username} | Total commands: ${commands.size}`)
  message.channel.send({embed})
  
} else {
 
  
     let embed = new Discord.RichEmbed()
        .setAuthor("NSFW Help", bot.user.avatarURL)
        .setDescription(`NSFW Command Help.\n`)
        .addField("NSFW", `${bot.commands.filter(cmd => cmd.help.module === 'NSFW').map(cmd => `\`${cmd.help.name}\``).join(", ")}`)
            .setFooter(`Requested by: ${message.author.username}`)
      message.channel.send({embed})
  
  
}  
}

module.exports.help = {
  name: 'help',
  description: 'Displays all commands and descriptions.',
  usage: 'help',
  module: "General", }