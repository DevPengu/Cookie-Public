const facts = require('../../assets/json/internetrules.json')


exports.run = (client, message, args) => { 

return message.channel.send(facts[Math.floor(Math.random() * facts.length)]);

}


module.exports.help = {
    name: "internetrules",
  description: "Just some really random but helpful rules",
  module: "Fun"
}