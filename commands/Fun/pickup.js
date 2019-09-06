const facts = require('../../assets/pickup.json')


exports.run = (client, message, args) => { 

return message.channel.send(facts[Math.floor(Math.random() * facts.length)]);

}


module.exports.help = {
    name: "pickup",
  description: "Well ... You're the one who asked ...",
  module: "Fun"
}