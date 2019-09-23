const Discord = require("discord.js");
const fetch = require("node-fetch");
const send = require("quick.hook");

module.exports.run = async (client, message, args) => {
    fetch(process.env.COOKIEBOTIMAGES + "turtle")
    .then(res => res.json()).then(body => {
        if(!body) return message.reply(" whoops. I broke, try again!")

    let hugembed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setImage(body.Link);

    message.channel.send(hugembed);
    })
};

module.exports.help = {
  name: "turtle",
  description: "Sends an adorable turtle!",
  module: "Photos"
}