const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (client, msg, args) => {
    try {
        const { body } = await superagent
            .get('https://shibe.online/api/birds')
            .query({
                count: 1,
                urls: true,
                httpsUrls: true
            });
        return msg.channel.send({ files: [body[0]] });
    } catch (err) {
        return msg.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
}

module.exports.help = {
  name: "birb",
  description: "Sends an adorable birb",
  module: "Photos"
}