const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
 if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    let {body} = await superagent
    .get(process.env.NEKOLIFE + `pussy`);

    let pussyembed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setImage(body.url);

    message.channel.send(pussyembed);
    message.delete().catch();

}

module.exports.help = {
  name: "hpussy",
  description: "Its porn ... I think? o.o",
  module: "NSFW"
}