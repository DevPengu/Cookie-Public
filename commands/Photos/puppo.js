const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let {body} = await superagent
    .get(`random.dog/woof.json`);

    let dogEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
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