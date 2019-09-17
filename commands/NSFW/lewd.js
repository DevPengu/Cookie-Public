
const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.channel.send('You can use this commands only on NSFW Channels!')
    superagent.get(process.env.NEKOLIFE + 'lewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`#f7d4f1`)
  message.channel.send(lewdembed);
    })
}

module.exports.help = {   
  name: "lewd",   
  description: "It's a lewd command  ...",
  module: "NSFW"
}