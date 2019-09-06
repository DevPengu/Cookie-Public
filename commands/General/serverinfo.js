const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let guild = message.guild
let created = guild.createdAt
let guildammount = guild.members.size
let name = guild.name
let owner = guild.owner.user.tag
let totalrole = guild.roles.size
let totaltext = guild.channels.size
let region = guild.region
let verify = guild.verificationLevel
let guildid = guild.id
let ownerid = guild.owner.id


const embed = new Discord.RichEmbed()
.setColor(871614)
.setTitle("Server Info")
.addField("Server Name", name)
.addField('Owner', owner)
.addField("Owner ID", ownerid)
.addField('Roles', totalrole)
.addField('Channels', totaltext)
.addField("Server Region", region)
.addField('Users', guildammount)
.addField("Verification Level", verify)
.addField('Time Created', created)
.addField('Guild ID', guildid)


message.channel.send(embed)
}

  module.exports.help = {
    name: "server-info",
    description: "Server information",
    module: "General"
  }
  