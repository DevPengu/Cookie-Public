const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (client, message, args) => {
    let {body} = await superagent
    .get(process.env.HEREISMYCODE + `giraffe`);

    let hugembed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setImage(body.Link);

    message.channel.send(hugembed);
}

module.exports.help = {
  name: "giraffe",
  description: "Sends a giraffe",
  module: "Photos"
}