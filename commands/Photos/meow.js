const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(process.env.NEKOLIFE + `meow`);

    let meowembed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setImage(body.url);

    message.channel.send(meowembed);
    message.delete().catch();

}

module.exports.help = {
  name: "meow",
  description: 'Sends a meow',
  module: "Photos"
}