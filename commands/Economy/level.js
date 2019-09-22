const Discord = require('discord.js');
const { Level } = require('../../models');

module.exports.run = async (bot, message, args) => {
  Level.findOne({ userID: message.author.id, GuildID: message.guild.id },
    (err, userLevel) => {
      if (err) console.error(err);

      const embed = new Discord.RichEmbed()
        .setColor('#f7d4f1');
      if (!userLevel) {
        embed.addField('Rip, you have no xp. Keep chatting!', '0', true);
        return message.channel.send(embed);
      }
      embed.addField('Your current level is', userLevel.level, true);
      embed.addField('Your current xp value is', userLevel.xp, true);
      return message.channel.send(embed);
    });
};

module.exports.help = {
  name: 'level',
  description: 'What level are you?',
  module: 'Economy',
};
