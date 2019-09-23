const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");
require('dotenv-flow')

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first();
if(user.id == message.author.id) return message.channel.send("No. Try nomming someone else. :x:");
   if(!user) return message.channel.send("You must mention someone!");
  
    let {body} = await superagent
    .get(process.env.COOKIEBOTIMAGES + `nom`);

    let hugembed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setDescription(`${user} was nommed by <@${message.author.id}> :O`)
    .setImage(body.Link);

    message.channel.send(hugembed);

}

module.exports.help = {
  name: "nom",
  description: 'nom',
  module: "Reactions"
}