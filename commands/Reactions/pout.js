const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");
require('dotenv-flow')

module.exports.run = async (bot, message, args) => {
    let {body} = await superagent
    .get(process.env.RRA + `pout`);

    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setImage(process.env.RRA2 + body.path)



    message.channel.send(hentaiEmbed);
    message.delete().catch();
}

module.exports.help = {
  name: "pout",
  description: ":(",
  module: "Reactions"
}