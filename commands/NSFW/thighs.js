    
const Discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, message, args) => {
  if (message.channel.nsfw === true) {
      superagent.get(process.env.NEKOAPI)
      .query({ type: 'thigh'})
      .end((err, response) => {
        let thighembed = new Discord.RichEmbed()
        .setColor("#f7d4f1")
        .setImage(response.body.message)
        message.channel.send(thighembed);
      });
    } else {
      message.channel.send("This isn't NSFW channel!")
    }
  };

exports.help = {
name: "thigh",
description: "thighs",
module: "NSFW"
}