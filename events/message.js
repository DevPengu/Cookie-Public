const Discord = require('discord.js');
const { Profile } = require('../models');

exports.run = async (client, message) => {
  try {
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
  
    const settings = await client.getGuild(message.guild);
  
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if (message.content.startsWith(settings.prefix)) {
      const cmd = client.commands.get(command);
      if (!cmd) return;
  
      cmd.run(client, message, args, settings);
    }
  
    const userProfile = await Profile.findOne({ userID: message.author.id, guildID: message.author.id });
    if (!userProfile) await client.createProfile({ userID: message.author.id, guildID: message.guild.id });
    else {
      userProfile.money += 1;
      userProfile.xp += 1;
  
      if (userProfile.xp > userProfile.xpToLevel) {
        userProfile.level += 1;
        userProfile.xpToLevel += 100 + (25 * userProfile.level);
      }
      userProfile.save().catch((err) => console.error(err));
    }
  } catch (error) {
    console.error(error);
  }
};
