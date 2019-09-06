const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first();
  if(user.id == message.author.id) return message.channel.send("no :x:");
   if(!user) return message.channel.send("You must mention someone!");
  
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/cuddle`);

    let cuddleEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setDescription(`${user} was cuddled by <@${message.author.id}> :heart:`)
    .setImage(body.url);

    message.channel.send(cuddleEmbed);
  

}

module.exports.help = {
  name: "cuddle",
  description: "Cuddle a user",
  module: "Reactions"
}