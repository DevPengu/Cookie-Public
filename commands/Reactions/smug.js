const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");
require('dotenv-flow')

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(process.env.NEKOLIFE + `smug`);

    let smugembed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setImage(body.url);

    message.channel.send(smugembed);
    message.delete().catch();

}

module.exports.help = {
  name: "smug",
  description: 'Sends a smug anime gif',
  module: "Reactions"
}