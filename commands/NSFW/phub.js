const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const query = args.join(' ')
    if (!query) return message.channel.send("Usage: pornhub <search query>")
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
    const Pornsearch = require('pornsearch').search(args[0]);
        Pornsearch.gifs(1)
            .then(gifs => {
                let gifrnd = gifs.map(gif => gif.url)
                let embed = new Discord.RichEmbed()
                .setColor("#f7d4f1")
                    .setImage(gifrnd[Math.floor(Math.random() * gifrnd.length)])
                message.channel.send({
                    embed: embed
                })
            })
}

module.exports.help = {   
  name: "pornhub",   
  description: "...",
  module: "NSFW"
}