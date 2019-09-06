const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
  let {body} = await superagent
    .get(`https://rra.ram.moe/i/r?type=owo`);

    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setImage("https://rra.ram.moe" + body.path)



    message.channel.send(hentaiEmbed);
    message.delete().catch();

}

module.exports.help = {
  name: "owo",
  description: "owo",
  module: "Photos"
}