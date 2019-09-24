const Discord = require('discord.js');
const { Money, Level } = require('../models');

exports.run = async (client, message) => {
  if (message.author.bot) return;

  if (message.channel.type === 'dm') {
    const authorid = message.author.id;
    const server = client.guilds.get('513056225047609344');
    const dmembed = new Discord.RichEmbed()
      .setTitle('New DM message!')
      .setDescription(`Sent by: ${message.author.username}${message.author.discriminator}`)
      .addField('Message', `${message.content}`)
      .setFooter(`Message sent at: ${message.createdAt}`);
    const channel = server.channels.find((c) => c.name === authorid);
    if (channel) {
      channel.send(dmembed);
    } else {
      server.createChannel(authorid, 'text').then((newchannel) => newchannel.send(dmembed));
    }
    return;
  }

  let settings;
  try {
    settings = await client.getGuild(message.guild);
  } catch (error) {
    console.error(error);
  }

  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.content.startsWith(settings.prefix)) {
    const cmd = client.commands.get(command);
    if (!cmd) return;

    cmd.run(client, message, args, settings);
  } else {
    const coinsToAdd = 1;
    Money.findOne({
      userID: message.author.id,
      guildID: message.guild.id,
    }, (err, money) => {
      if (err) console.log(err);
      if (!money) {
        const newMoney = new Money({
          userID: message.author.id,
          guildID: message.guild.id,
          money: coinsToAdd,
          cooldown: 0,

        });
        newMoney.save().catch((err) => console.log(err));
      } else {
        money.money += coinsToAdd;
        money.save().catch((err) => console.log(err));
      }
    });
  }
  

  // LEVEL CODING
  const xpToAdd = 1;
  Level.findOne({
    userID: message.author.id,
    guildID: message.guild.id,
  }, (err, xp) => {
    if (err) console.log(err);
    if (!xp) {
      const newXp = new Level({
        userID: message.author.id,
        guildID: message.guild.id,
        xp: xpToAdd,
        level: 1,
        xpToLevel: 100,
      });
      newXp.save().catch((err) => console.log(err));
    } else {
      xp.xp += xpToAdd;
      if (xp.xp > xp.xpToLevel) {
        xp.level += 1;
        xp.xpToLevel = xp.xpToLevel + 100 + (25 * xp.level);
      }
      xp.save().catch((err) => console.log(err));
    }
  });
};