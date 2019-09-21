const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let botRole = message.guild.members.get(client.user.id).highestRole;
    let userRole = message.guild.members.get(kUser.id).highestRole;
    let kReason = args.slice(1).join(" ") || "No reason";
    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
    if(botRole.position < userRole.position) return message.channel.send("My role must be higher than user's role!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#F7D4F1")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("Can't find channel named 'mod-log'.");

    message.guild.member(kUser).kick(kReason);
    incidentchannel.send(kickEmbed);


    return;

  }

  module.exports.help = {
    name: "kick",
    description: "It's a kick command xD",
    module: "Mod"
  }
