const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");
require('dotenv-flow')

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first();
   if(!user) return message.channel.send("You must mention someone!");
  if(user.id == message.author.id) return message.channel.send("Nope. Try kissing someone else :x:");
  
    let {body} = await superagent
    .get(process.env.NEKOLIFE + `kiss`);

    let kissEmbed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setDescription(`${user} was kissed by <@${message.author.id}> :heart:`)
    .setImage(body.url);

    message.channel.send(kissEmbed);

}

module.exports.help = {
  name: "kiss",
  description: "Kiss a user",
  module: "Reactions"
}