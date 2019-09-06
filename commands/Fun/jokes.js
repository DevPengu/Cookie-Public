const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

try {
    const { text } = await superagent
    .get('http://api.icndb.com/jokes/random');
    const body = JSON.parse(text);
    return message.channel.send(`${body.slip.advice}`);
} catch (err) {
    return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
}
}

module.exports.help = {
    name: "joke",
    description: 'Jokes from the bot',
    module: "Fun"
  }