const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
let {body} = await superagent
  .get(process.env.CAT);

let catembed = new Discord.RichEmbed()
.setColor("#f7d4f1")
.setImage(body.file);

message.channel.send(catembed);
message.delete().catch();
}

module.exports.help = {
  name: "kitteh",
  description: "Sends an adorable cat",
  module: "Photos"
}