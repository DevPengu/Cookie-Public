const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const Discord = require("discord.js")
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    var subreddits = [
        'nsfwcosplay',
        'cosplayonoff',
        'cosporn',
        'cosplayboobs'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`cosplay.jpg`, r.body)
                       message.channel.send({files: [r.body]})
                fs.unlink(`./cosplay.jpg`)
            })
        })
}

module.exports.help = {   
  name: "cosplay",   
  description: "Nani?",
  module: "NSFW"
}