const facts = require('../../assets/json/factscore.json')


exports.run = (client, message, args) => { 

return message.channel.send(facts[Math.floor(Math.random() * facts.length)]);

}


module.exports.help = {
    name: "factscore",
  description: "Just some really random factcore quotes lol",
  module: "Fun Facts"
}