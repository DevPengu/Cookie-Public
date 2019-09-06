const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first();
   if(!user) return message.channel.send("You must mention someone!");
  if(user.id == message.author.id) return message.channel.send("Can't you mention someone else?");
  
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/pat`);

    let patembed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setDescription(`${user} was patted on the head by <@${message.author.id}> :heart:`)
    .setImage(body.url);

    message.channel.send(patembed);
    message.delete().catch();

}

module.exports.help = {
  name: "pat",
  description: 'Pats a user on the head',
  module: "Reactions"
}