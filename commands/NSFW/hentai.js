const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require("discord.js")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    var subreddits = [
        'HENTAI_GIF',
        'hentai_irl',
      "adorablehentai",
"AnimeBooty",
"BigAnimeTiddies",
"bowsette",
"CumHentai",
"ecchi",
"EmbarrassedHentai",
"futanari",
"GF34",
"HeartShapedHentai",
"hentai",
"HENTAI_GIF",
"HentaiPetgirls",
"HuggingHentai",
"inumimi",
"MasturbationHentai",
"NewGameXXX",
"OralHentai",
"PixelArtHentai",
"PizzaThot",
"sakimichan",
"Shadman",
"wholesomehentai",
"XXLHentai",
"yaoi",
"yuri"
    ]
      var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    randomPuppy(sub).then(url => {
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setImage(url)
    message.channel.send(embed)
            })
}

module.exports.help = {   
  name: "hentai",   
  description: "Its hentai ...",
  module: "NSFW"
}