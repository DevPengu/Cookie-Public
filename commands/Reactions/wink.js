const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (client, message, args) => {
    let {body} = await superagent
    .get(`https://some-random-api.ml/animu/wink`);

    let hugembed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setImage(body.link);

    message.channel.send(hugembed);
}

module.exports.help = {
  name: "wink",
  description: ";)",
  module: "Reactions"
}