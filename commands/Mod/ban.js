const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let botRole = message.guild.members.get(client.user.id).highestRole;
    let userRole = message.guild.members.get(bUser.id).highestRole;
    let bReason = args.slice(1).join(" ") || "No reason";
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return errors.noPerms(message, "MANAGE_MEMBERS");
    if(botRole.position < userRole.position) return message.channel.send("My role must be higher than user's role!")
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#F7D4F1")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("Can't find channel named 'mod-log'.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;

  }

  module.exports.help = {
    name: "ban",
    description: "It's a ban command xD",
    module: "Mod"
  }
