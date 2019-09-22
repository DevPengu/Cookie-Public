const Discord = require('discord.js');
const { Money } = require('../../models');
const { Level } = require('../../models');

module.exports.run = async (client, message, args) => {
  let settings;
  try {
    settings = await client.getGuild(message.guild);
  } catch (error) {
    console.error(error);
  }
  Money.find({
    guildID: message.guild.id,
    guildName: message.guild.name,
  }).sort([
    ['money', 'descending'],
  ]).exec((err, res) => {
    if (err) console.log(err);

    Level.find({
      guildID: message.guild.id,
      guildName: message.guild.name,
    }).sort([
      ['xp', 'descending'],
    ]);

    const embed = new Discord.RichEmbed()
      .setTitle('Leaderboard');
    // if there are no results
    if (res.length === 0) {
      embed.setColor('#f7d4f1');
      embed.addField('No data found', `Please type in chat to gain coins and xp! Or try ${settings.prefix}daily!`);
    } else if (res.length < 10) {
      // less than 10 results
      embed.setColor('#f7d4f1');
      for (let i = 0; i < res.length; i++) {
        const member = message.guild.members.get(res[i].userID) || 'User Left';
        if (member === 'User Left') {
          embed.addField(`${i + 1}. ${member}`, `**Coins**: ${res[i].money}`);
        } else {
          embed.addField(`${i + 1}. ${member.user.username}`, `**Coins**: ${res[i].money}`);
        }
      }
    } else {
      // more than 10 results
      embed.setColor('#f7d4f1');
      for (let i = 0; i < 10; i++) {
        const member = message.guild.members.get(res[i].userID) || 'User Left';
        if (member === 'User Left') {
          embed.addField(`${i + 1}. ${member}`, `**Coins**: ${res[i].money}`);
        } else {
          embed.addField(`${i + 1}. ${member.user.username}`, `**Coins**: ${res[i].money}.
          `);
        }
      }
    }

    message.channel.send(embed);
  });
};


module.exports.help = {
  name: 'leaderboard',
  description: 'bleh',
  module: 'Economy',
};
