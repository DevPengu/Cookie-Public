const facts = require('../../assets/json/skyrim.json')


exports.run = (client, message, args) => { 

return message.channel.send(facts[Math.floor(Math.random() * facts.length)]);

}

module.exports.help = {
    name: "skyrim",
  description: "Let me guess... someone stole your sweetroll.",
  module: "Fun"
}