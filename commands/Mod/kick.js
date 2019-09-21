const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

  let settings;
  try {
      settings = await client.getGuild(message.guild);
  } catch (error) {
      console.error(error);
  }


    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let botRole = message.guild.members.get(client.user.id).highestRole;
    let userRole = message.guild.members.get(kUser.id).highestRole;


    let kReason = args.slice(1).join(" ") || "No reason";
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Nope! You can't do that!");
    if(botRole.position < userRole.position) return message.channel.send("My role must be higher than user's role!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#F7D4F1")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let incidentchannel = message.guild.channels.find(settings.modLog);
    if(!incidentchannel) return message.channel.send("Cannot find your modLog in my settings! Please set one!");

    message.guild.member(kUser).kick(kReason);
    incidentchannel.send(kickEmbed);


    return;

  }

  module.exports.help = {
    name: "kick",
    description: "It's a kick command xD",
    module: "Mod"
  }
