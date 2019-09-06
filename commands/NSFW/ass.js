const Discord = require("discord.js");
const superagent = require("superagent")
const fs = require("fs")

exports.run = (client, message, args) => {
    if (message.channel.nsfw === true) {
        superagent.get('https://nekobot.xyz/api/image')
        .query({ type: 'ass'})
        .end((err, response) => {
          message.channel.send({ file: response.body.message });
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