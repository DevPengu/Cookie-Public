const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");
require('dotenv-flow')

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first();
   if(user.id == message.author.id) return message.channel.send("I said no. Try feeding someone else. :x:");
   if(!user) return message.channel.send("You must mention someone!");
 
  
    let {body} = await superagent
    .get(process.env.NEKOLIFE + `feed`);

    let feedembed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setDescription(`${user} was given sustenance by <@${message.author.id}> ::`)
    .setImage(body.url);

    message.channel.send(feedembed);
   

}

module.exports.help = {
  name: "feed",
  description: 'Feeds a user <3',
  module: "Reactions"
}