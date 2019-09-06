const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
try {
  const { body } = await superagent
      .get('http://aws.random.cat/meow')
return message.channel.send(body.file);
} catch (err) {
  return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
}
}

module.exports.help = {
  name: "kitteh",
  description: "Sends an adorable cat",
  module: "Photos"
}