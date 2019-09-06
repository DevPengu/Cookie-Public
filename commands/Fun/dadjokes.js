const facts = require('../../assets/dadjokes.json')


exports.run = (client, message, args) => { 

return message.channel.send(facts[Math.floor(Math.random() * facts.length)]);

}


module.exports.help = {
    name: "dadjoke",
  description: "Cringe",
  module: "Fun"
}