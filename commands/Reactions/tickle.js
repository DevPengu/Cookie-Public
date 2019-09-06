const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first();
   if(!user) return message.channel.send("You must mention someone!");
  if(user.id == message.author.id) return message.channel.send("STHAP TRYING THESE COMMANDS ON YOURSELF REEEEEEEEE");
  
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/tickle`);

    let tickleembed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setDescription(`${user} was tickled by <@${message.author.id}> :joy:`)
    .setImage(body.url);

    message.channel.send(tickleembed);
    message.delete().catch();

}

module.exports.help = {
  name: "tickle",
  description: 'Tickles a user',
  module: "Reactions"
}