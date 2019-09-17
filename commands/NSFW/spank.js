const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.members.first();
   if(!user) return message.channel.send("You must mention someone!");
  if(user.id == message.author.id) return message.channel.send("Errrr .... no");
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

  
    let {body} = await superagent
    .get(process.env.NEKOLIFE + `spank`);

    let spankembed = new Discord.RichEmbed()
    .setColor("#f7d4f1")
    .setDescription(`${user} was spanked by <@${message.author.id}> :eyes:`)
    .setImage(body.url);

    message.channel.send(spankembed);
    message.delete().catch();

}

module.exports.help = {
  name: "spank",
  description: 'Spanks a user',
  module: "NSFW"
}