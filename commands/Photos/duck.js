const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (client, msg, args) => {
    try {
        const { body } = await superagent
            .get('https://random-d.uk/api/v1/random')

        return msg.channel.send({ files: [body.url] });
    } catch (err) {
        return msg.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
}

module.exports.help = {
  name: "duck",
  description: "Sends an adorable duck",
  module: "Photos"
}