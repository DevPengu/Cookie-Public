const Discord = require('discord.js');
const { Money } = require('../../models');

module.exports.run = async (client, message, args, settings) => {
  const embed = new Discord.RichEmbed()
    .setColor('#f7d4f1');

  const userMoney = await Money.findOne({ userID: message.author.id, guildID: message.guild.id });
  if (!userMoney) {
    embed.addField(`Rip, you have no coins. Try ${settings.prefix}daily! `, '0', true);
    return message.channel.send(embed);
  }
  embed.addField('Your current balance is', Money.money, true);
  return message.channel.send(embed);
};

module.exports.help = {
  name: 'coins',
  description: 'Tells how many coins you have! :D',
  module: 'Economy',
};
