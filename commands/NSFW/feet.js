const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
 if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/feet`);

    let feetembed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setImage(body.url);

    message.channel.send(feetembed);
    message.delete().catch();

}

module.exports.help = {
  name: "feet",
  description: "Its porn ... I think? o.o",
  module: "NSFW"
}