const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (client, msg, args) => {
    try {
        const { body } = await superagent
            .get('https://randomfox.ca/floof/')
            
        return msg.channel.send({ files: [body.image] });
    } catch (err) {
        return msg.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
}

module.exports.help = {
  name: "fox",
  description: "Sends an adorable fox",
  module: "Photos"
}