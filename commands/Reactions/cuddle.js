const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");
require('dotenv-flow')

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first();
  if(user.id == message.author.id) return message.channel.send("no :x:");
   if(!user) return message.channel.send("You must mention someone!");
  
    let {body} = await superagent
    .get(process.env.NEKOLIFE + `cuddle`);

    let cuddleEmbed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setDescription(`${user} was cuddled by <@${message.author.id}> :heart:`)
    .setImage(body.url);

    message.channel.send(cuddleEmbed);
  

}

module.exports.help = {
  name: "cuddle",
  description: "Cuddle a user",
  module: "Reactions"
}