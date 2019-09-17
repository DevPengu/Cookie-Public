const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");
require('dotenv-flow')

module.exports.run = async (client, message, args) => {
    let {body} = await superagent
    .get(process.env.WINK + `wink`);

    let hugembed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setImage(body.link);

    message.channel.send(hugembed);
}

module.exports.help = {
  name: "wink",
  description: ";)",
  module: "Reactions"
}