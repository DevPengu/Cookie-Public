const facts = require('../../assets/json/insult.json')
module.exports.run = async (bot, message, args) => {


   let insultedUser = message.mentions.members.first(); 
  if(insultedUser.id == message.author.id) return message.channel.send("Compliment someone else Baka!");
  if (!insultedUser) return message.reply(":x: You didn't specify a user!");

  
  message.channel.send(`${insultedUser}, ${facts[Math.floor(Math.random() * facts.length)]}`);

   }

module.exports.help = {
   name: "insult",
  description: "Ouch ...",
  module: "Fun"
}