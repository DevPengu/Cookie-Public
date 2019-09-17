const Discord = require("discord.js");
const request = require('request');
const superagent = require('superagent')

module.exports.run = async (client, message, args) => {
    request(process.env.BOOBS, function(error, result) {

        if (error) {
            console.log("Error:" + error)
        }
        let boob = JSON.parse(result.body)
        let boobembed = new Discord.RichEmbed()
        .setColor("#f7d4f1")
        .setImage('http://media.oboobs.ru/' + boob[0].preview)
        message.channel.send(boobembed)

    })
}


module.exports.help = {   
  name: "boobs",   
  description: "Bewbs",
  module: "NSFW"
}