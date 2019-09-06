const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first();
   if(!user) return message.channel.send("You must mention someone!");
  if(user.id == message.author.id) return message.channel.send("Why do you wish to harm yourself?");
  
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/slap`);

    let cuddleEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
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