const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!args[0]) return message.reply("Please ask a full question!");
let replies = ["Yes", "No", "I don't know", "Ask again later", "Maybe", "Not that I can foresee", "It is decidedly so", "Without a doubt", "Don't count on it", "Very doubtful", "Concentrate and try again"];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(0).join(" ");
  
let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("#FF00FF")
.addField("Question", question)
.addField("Answer", replies[result]);

message.channel.send(ballembed);
}
                            
module.exports.help = {
  name: "8ball",
  description: "It's an 8ball ...",
  module: "Fun"
}