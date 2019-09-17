const request = require('snekfetch');
const Discord = require('discord.js')
const randomPuppy = require('random-puppy');
const fs = require("fs");

exports.run = async (client, message, args, level) => {
  if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
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
  name: "4k",   
  description: "Its porn ... I think? o.o",
  module: "NSFW"
}