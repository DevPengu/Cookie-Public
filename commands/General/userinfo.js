const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
   var userinfo = new Discord.RichEmbed()
      .setTitle("User Information")
      .setDescription(`${message.author.username}`)
      .setColor("#F7D4F1")
      .addField("ID:", `${message.author.id}`, false)
      .addField("Discriminator:", `${message.author.discriminator}`, false)
      .addField("Game:",`${message.author.presence.game ? message.author.presence.game.name : "Nothing"}`, false)
      .addField("Status:", `${message.author.presence.status}`, false)
      .addField("Joined at", `${message.member.joinedAt.toLocaleString()}`, false)
      .addField("Account Created", `${message.author.createdAt.toLocaleString()}`, false)
      .addField("Roles", `${message.member.roles.map(r => r.name).slice(1).join(", ")}`, false)

      message.channel.send(userinfo);
  
  }

  module.exports.help = {
    name: "user-info",
    description: "Gives information about yourself",
    module: "General"
  }  