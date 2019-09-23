const Discord = require('discord.js');
const { Money } = require('../../models');

module.exports.run = async (client, message, args, settings) => {
  const guildMoney = await Money.find({ guildID: message.guild.id }).sort([['money', 'descending']]);
  const embed = new Discord.RichEmbed()
    .setTitle('Leaderboard');
  if (guildMoney.length === 0) {
    embed.setColor('#f7d4f1');
    embed.addField('No data found', `Please type in chat to gain coins and xp! Or try ${settings.prefix}daily!`);
  } else if (guildMoney.length < 10) {
    // less than 10 results
    embed.setColor('#f7d4f1');
    for (let i = 0; i < guildMoney.length; i++) {
      const member = message.guild.members.get(guildMoney[i].userID) || 'User Left';
      if (member === 'User Left') {
        embed.addField(`${i + 1}. ${member}`, `**Coins**: ${guildMoney[i].money}`);
      } else {
        embed.addField(`${i + 1}. ${member.user.username}`, `**Coins**: ${guildMoney[i].money}`);
      }
    }
  } else {
    // more than 10 results
    embed.setColor('#f7d4f1');
    for (let i = 0; i < 10; i++) {
      const member = message.guild.members.get(guildMoney[i].userID) || 'User Left';
      if (member === 'User Left') {
        embed.addField(`${i + 1}. ${member}`, `**Coins**: ${guildMoney[i].money}`);
      } else {
        embed.addField(`${i + 1}. ${member.user.username}`, `**Coins**: ${guildMoney[i].money}.
              `);
      }
    }
  }
  message.channel.send(embed);
};


module.exports.help = {
  name: 'leaderboard',
  description: 'bleh',
  module: 'Economy',
};
