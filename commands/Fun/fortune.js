const facts = require('../../assets/json/fortune.json')


exports.run = (client, message, args) => { 

return message.channel.send(facts[Math.floor(Math.random() * facts.length)]);

}

module.exports.help = {
    name: "fortune",
  description: "Ask the magical fortune cookie!",
  module: "Fun"
}