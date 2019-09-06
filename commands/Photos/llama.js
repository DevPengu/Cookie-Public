const Discord = require("discord.js");
const fetch = require("node-fetch");
const send = require("quick.hook");

module.exports.run = async (client, message, args) => {
    fetch("https://apis.duncte123.me/llama")
    .then(res => res.json()).then(body => {
        if(!body) return message.reply(" whoops. I broke, try again!")

    let hugembed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setImage(body.data.file);

    message.channel.send(hugembed);
    })
};
module.exports.help = {
  name: "llama",
  description: "Sends a llama",
  module: "Photos"
}