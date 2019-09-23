const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");



exports.run = async (client, msg, args) => { 
  try {
    const { text } = await superagent
.get(process.env.COOKIEBOTFACTS + 'turtle');
    const body = JSON.parse(text);
    return msg.channel.send(`${body.Link}`);
} catch (err) {
    return msg.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
}
}


module.exports.help = {
    name: "turtlefacts",
  description: "Just some really random turtle facts",
  module: "Fun Facts"
}