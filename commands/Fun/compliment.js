const facts = require('../../assets/json/compliment.json')
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
   let insultedUser = message.mentions.members.first(); 
  if(insultedUser.id == message.author.id) return message.channel.send("Compliment someone else <:Baka:614814090304552971>!!");
  if (!insultedUser) return message.reply(":x: You didn't specify a user!");

  
  message.channel.send(`${insultedUser}, ${facts[Math.floor(Math.random() * facts.length)]} <a:ilycat:552190159337291777>`);

}
  

module.exports.help = {
   name: "compliment",
  description: "Awe...",
  module: "Fun"
}