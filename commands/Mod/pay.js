const { Money } = require('../../models');

module.exports.run = async (client, message, args) => {
  if (message.member.id !== message.guild.owner.id) return message.reply('Only the owner of the guild can execute this command!');

  const user = message.mentions.users.first() || client.users.get(args[0]);
  if (!user) return message.reply('You must mention someone or give their ID!');
  const coinsToAdd = parseInt(args[1], 10);
  if (!coinsToAdd) return message.reply("You didn't tell me how many coins to give ...");

  const userMoney = await Money.findOne({ userID: user.id, guildID: message.guild.id });
  if (!userMoney) {
    new Money({
      userID: user.id,
      guildID: message.guild.id,
      money: coinsToAdd,
      cooldown: 0,
    }).save().catch((err) => console.error(err));
  } else {
    userMoney.money += coinsToAdd;
    userMoney.save().catch((err) => console.error(err));
  }

  return message.channel.send(`You gave ${coinsToAdd} coins to ${user}!!`).then((msg) => msg.delete(5000));
};

module.exports.help = {
  name: 'pay',
  description: 'Guild owner only, give a user points',
  module: 'Mod',
};
