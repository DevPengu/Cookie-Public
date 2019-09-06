const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/ngif`);

    let nekoembed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setImage(body.url);

    message.channel.send(nekoembed);
    message.delete().catch();

}

module.exports.help = {
  name: "ngif",
  description: 'Sends a Neko',
  module: "Photos"
}