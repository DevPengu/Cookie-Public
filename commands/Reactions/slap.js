const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");
require('dotenv-flow')

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first();
   if(!user) return message.channel.send("You must mention someone!");
  if(user.id == message.author.id) return message.channel.send("Why do you wish to harm yourself?");
  
    let {body} = await superagent
    .get(process.env.NEKOLIFE + `slap`);

    let cuddleEmbed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setDescription(`${user} was slapped by <@${message.author.id}> :eyes:`)
    .setImage(body.url);

    message.channel.send(cuddleEmbed);
    message.delete().catch();

}

module.exports.help = {
  name: "slap",
  description: "Slap a user!",
  module: "Reactions"
}