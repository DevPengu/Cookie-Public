const randomPuppy = require('random-puppy');
const Discord = require('discord.js');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    var subreddits = [
        'RealGirls',
        'amateur',
        'gonewild'
    ]
   
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    randomPuppy(sub).then(url => {
    let embed = new Discord.RichEmbed()
    .setColor("#F7D4F1")
    .setImage(url)
    message.channel.send(embed)
            })
}



module.exports.help = {   
  name: "amature",   
  description: "Its porn ...",
  module: "NSFW"
}