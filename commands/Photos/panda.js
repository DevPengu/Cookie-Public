const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (client, message, args) => {
    let {body} = await superagent
    .get(process.env.IMAGES + `panda`);

    let hugembed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setImage(body.link);

    message.channel.send(hugembed);
}


module.exports.help = {
  name: "panda",
  description: "Sends an adorable panda",
  module: "Photos"
}