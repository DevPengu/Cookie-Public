const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(process.env.NEKOLIFE + `lizard`);

    let lizardembed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setImage(body.url);

    message.channel.send(lizardembed);
    message.delete().catch();

}

module.exports.help = {
  name: "lizard",
  description: 'Sends a lizard',
  module: "Photos"
}