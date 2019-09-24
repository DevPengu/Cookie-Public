const { Profile } = require('../../models');

module.exports.run = async (client, message, args) => {
  const coinsToAdd = 250;

  const userProfile = await Profile.findOne({ userID: message.author.id, guildID: message.guild.id });
  if (!userProfile) {
    await client.createProfile({ userID: message.author.id, guildID: message.guild.id, money: coinsToAdd, cooldown: Date.now() + 86400000 });

    message.channel.send(`You got ${coinsToAdd} coins!!`).then((msg) => msg.delete(5000));
    return;
  }
  if (userProfile.cooldown <= Date.now()) {
    userProfile.money += coinsToAdd;
    userProfile.cooldown = Date.now() + 86400000;
    userProfile.save().catch((err) => console.error(err));
    message.channel.send(`You got ${coinsToAdd} couins!!`).then((msg) => msg.delete(5000));
  } else {
    message.channel.send(`You have already claimed your daily! Come back in ${msToTime(userProfile.cooldown - Date.now())}`);
  }
};

module.exports.help = {
  name: 'daily',
  description: 'Get some coins!',
  module: 'Economy',
};

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? `0${hours}` : hours;
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;

  return `${hours}:${minutes}:${seconds}`;
}
