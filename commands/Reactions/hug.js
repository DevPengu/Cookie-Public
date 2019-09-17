const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");
require('dotenv-flow')

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first();
if(user.id == message.author.id) return message.channel.send("No. Try hugging someone else. :x:");
   if(!user) return message.channel.send("You must mention someone!");
  
    let {body} = await superagent
    .get(process.env.NEKOLIFE + `hug`);

    let hugembed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setDescription(`${user} was hugged by <@${message.author.id}> :heart:`)
    .setImage(body.url);

    message.channel.send(hugembed);

}

module.exports.help = {
  name: "hug",
  description: 'Gives a user a hug <3',
  module: "Reactions"
}