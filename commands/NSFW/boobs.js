const Discord = require("discord.js");
const request = require('request');
const superagent = require('superagent')

module.exports.run = async (client, message, args) => {
    request("http://api.oboobs.ru/boobs/0/1/random", function(error, result) {

        if (error) {
            console.log("Error:" + error)
        }
        let boob = JSON.parse(result.body)
        message.channel.send(('http://media.oboobs.ru/' + boob[0].preview))

    })
}


module.exports.help = {   
  name: "boobs",   
  description: "Bewbs",
  module: "NSFW"
}