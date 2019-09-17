const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let {body} = await superagent
    .get(process.env.WOOF);

    let dogEmbed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setDescription(`Here's your puppo! :heart:`)
    .setImage(body.url);

    message.channel.send(dogEmbed);
    message.delete().catch();

}

module.exports.help = {
  name: "puppo",
  description: "Sends a dog :D",
  module: "Photos"
}