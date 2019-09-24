const Discord = require('discord.js');
const { Profile } = require('../../models');

module.exports.run = async (bot, message, args) => {
  const userProfile = await Profile.findOne({ userID: message.author.id, GuildID: message.guild.id });
  const embed = new Discord.RichEmbed()
    .setColor('#f7d4f1');
  if (!userProfile) {
    embed.addField('Rip, you have no xp. Keep chatting!', '0', true);
    return message.channel.send(embed);
  }
  embed.addField('Your current level is', userProfile.level, true);
  embed.addField('Your current xp value is', userProfile.xp, true);
  return message.channel.send(embed);
};

module.exports.help = {
  name: 'level',
  description: 'What level are you?',
  module: 'Economy',
};
