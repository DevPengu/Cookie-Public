const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require("discord.js")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    var subreddits = [
        'dickpic'
    ]
       var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    randomPuppy(sub).then(url => {
    let embed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setImage(url)
    message.channel.send(embed)
            })
}

module.exports.help = {   
  name: "dick",   
  description: ">//-//<",
  module: "NSFW"
}