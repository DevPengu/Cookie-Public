const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(process.env.NEKOLIFE + `holo`);

    let holoembed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setImage(body.url);

    message.channel.send(holoembed);
    message.delete().catch();

}

module.exports.help = {
  name: "holo",
  description: 'Sends Holo',
  module: "Photos"
}