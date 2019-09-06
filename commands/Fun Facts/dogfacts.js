const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (client, msg, args) => {
    try {
        const { text } = await superagent
    .get('https://some-random-api.ml/facts/dog');
        const body = JSON.parse(text);
        return msg.channel.send(`${body.fact}`);
    } catch (err) {
        return msg.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
}

module.exports.help = {
  name: "dogfacts",
  description: "Sends a dog fact",
  module: "Fun Facts"
}