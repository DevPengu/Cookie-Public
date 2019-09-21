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
    let botRole = message.guild.members.get(client.user.id).highestRole;
    let userRole = message.guild.members.get(bUser.id).highestRole;
    let bReason = args.slice(1).join(" ") || "No reason";
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Nope! You can't do that!");
    if(botRole.position < userRole.position) return message.channel.send("My role must be higher than user's role!");


  
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  if(!bUser) return message.channel.send("Can't find user!");
  let botRole = message.guild.members.get(client.user.id).highestRole;
  let userRole = message.guild.members.get(bUser.id).highestRole;
  let bReason = args.slice(1).join(" ") || "No reason";
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Nope! You can't do that!");
  if(botRole.position < userRole.position) return message.channel.send("My role must be higher than user's role!");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");



  
    let banEmbed = new Discord.RichEmbed()

    .setDescription("~Ban~")
    .setColor("#F7D4F1")
    .addField("Baned User", `${bUser} with ID ${bUser.id}`)
    .addField("Baned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Baned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason)
    let incidentchannel = message.guild.channels.find(settings.modLog);
    if(!incidentchannel) return message.channel.send("Cannot find your modLog in my settings! Please set one!");

    message.guild.member(bUser).Ban(bReason);
    incidentchannel.send(BanEmbed);

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
