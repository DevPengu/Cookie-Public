const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
  let {body} = await superagent
    .get(process.env.RRA + `nyan`);

    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setImage("https://rra.ram.moe" + body.path)



    message.channel.send(hentaiEmbed);
    message.delete().catch();

}

module.exports.help = {
  name: "nyan",
  description: "nya~",
  module: "Photos"
}