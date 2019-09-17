const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");
require('dotenv-flow')

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first();
   if(!user) return message.channel.send("You must mention someone!");
  if(user.id == message.author.id) return message.channel.send("You can't lick yourself ... Well you can but I don't need to know about that 🤢");
  
    let {body} = await superagent
    .get(process.env.RRA + `lick`);

    let hentaiEmbed = new Discord.RichEmbed()
    .setDescription(`<@${message.author.id}> has licked ${user}`)
    .setColor("#f7d4f1")
    .setImage(process.env.RRA2 + body.path)



    message.channel.send(hentaiEmbed);
    message.delete().catch();

}

module.exports.help = {
  name: "lick",
  description: "Did you seriously just lick them? Ew",
  module: "Reactions"
}
