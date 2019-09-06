const Discord = require('discord.js'); 
const fs = require('fs') 
module.exports.run = async (client, msg, args) => { 
  if(msg.member.id != "330528293843632130") 
    return msg.reply("Only the owner of the bot `VampyMaria#4980` can execute this command!")
  client.destroy()
  client.login(process.env.TOKEN)

 msg.channel.send('👌 Done!') } 
module.exports.help = { 
  name: 'reboot', 
 description: "Vampy only command, reboots bot",
  module: "Owner"
}