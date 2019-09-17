const facts = require('../../assets/turtlefacts.json')


exports.run = (client, message, args) => { 

return message.channel.send(facts[Math.floor(Math.random() * facts.length)]);

}


module.exports.help = {
    name: "turtlefacts",
  description: "Just some really random turtle facts",
  module: "Fun Facts"
}