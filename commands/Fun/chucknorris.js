const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (client, message, args) => {
    try {
        const { body } = await superagent
        .get('http://api.icndb.com/jokes/random')
        .query({
            escape: 'javascript'
        });
    return message.channel.send(body.value.joke);
} catch (err) {
    return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
}}

module.exports.help = {
    name: "chucknorris",
    description: "Chuckkkkkkk",
    module: "Fun"
  }