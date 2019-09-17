const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (client, msg, args) => {
    try {
        const { text } = await superagent
    .get(process.env.HEREISMYCODE + 'lizards');
        const body = JSON.parse(text);
        return msg.channel.send(`${body.fact}`);
    } catch (err) {
        return msg.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
}

module.exports.help = {
  name: "lizardfacts",
  description: "Sends a lizard fact",
  module: "Fun Facts"
}