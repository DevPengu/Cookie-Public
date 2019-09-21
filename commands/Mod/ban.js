const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

  
  let settings;
  try {
      settings = await client.getGuild(message.guild);
  } catch (error) {
      console.error(error);
  }



  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.slice(1).join(" ") || "No reason"
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Nope! You can't do that!")
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#F7D4F1")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(settings.modLog)
    if(!incidentchannel) return message.channel.send("Cannot find your modLog in my settings! Please set one!")
    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;

  }

  module.exports.help = {
    name: "ban",
    description: "It's a ban command xD",
    module: "Mod"
  }
  