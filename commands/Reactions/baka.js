const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");
require('dotenv-flow')

module.exports.run = async (bot, message, args) => {
  
    let {body} = await superagent
    .get(process.env.NEKOLIFE + `baka`);

    let bakaembed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setImage(body.url);

    message.channel.send(bakaembed);
    message.delete().catch();

}

module.exports.help = {
  name: "baka",
  description: 'BAKAAAAAAAAAAAAAAAA',
  module: "Reactions"
}