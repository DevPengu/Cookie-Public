const Discord = require("discord.js");
const superagent = require("superagent")
const fs = require("fs")
require('dotenv-flow')

exports.run = (client, message, args) => {
    if (message.channel.nsfw === true) {
        superagent.get(process.env.NEKOAPI)
        .query({ type: 'ass'})
        .end((err, response) => {
          let assembed = new Discord.RichEmbed()
          .setColor("#f7d4f1")
          .setImage(response.body.message)
          message.channel.send(assembed);
        });
      } else {
        message.channel.send("This isn't NSFW channel!")
      }
    };
    

module.exports.help = {   
  name: "ass",   
  description: "Its porn ...",
  module: "NSFW"
}