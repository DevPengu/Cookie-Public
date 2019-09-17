const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (client, msg, args) => {
    try {
        const { body } = await superagent
            .get(process.env.DUCK)

            let duckembed = new Discord.RichEmbed()
            .setColor("#f7d4f1")
            .setImage(body.url)

        return msg.channel.send(duckembed)
    } catch (err) {
        return msg.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
}

module.exports.help = {
  name: "duck",
  description: "Sends an adorable duck",
  module: "Photos"
}