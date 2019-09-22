const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, settings) => {
  if (message.member.id !== message.guild.owner.id) {
    return message.reply('Only the owner of the guild can execute this command!');
  }

  const setting = args[0];

  switch (setting) {
    case 'prefix': {
      const prefix = args.slice(1).join(' ');
      if (!prefix) return message.channel.send(`Please provied me a prefix, ${message.author}`);

      if (prefix) {
        await client.updateGuild(message.guild, { prefix });
        return message.channel.send(`Prefix has been updated to: \`${prefix}\``).catch((e) => console.log(e));
      }

      return message.channel.send(`Current prefix: ${settings.prefix || client.config.prefix}`);
    }
    case 'welcomeChannel': {
      const channel = message.mentions.channels.first();
      if (!channel) return message.channel.send(`Please mention a channel, ${message.author}`);

      if (channel) {
        await client.updateGuild(message.guild, {
          welcomeChannel: channel.name,
        });
        return message.channel.send(`Welcome channel has been set to ${channel}`).catch((e) => console.log(e));
      }
      return message.channel.send(`Current welcome channel: ${settings.welcomeChannel ? `<#${settings.welcomeChannel}>` : 'None'}`);
    }
    case 'welcomeMsg': {
      const msg = args.slice(1).join(' ');
      if (!message) return message.channel.send(`Please provided me a welcome message , ${message.author}`);

      const properusage = msg.match(/^.*?{{user}}.*?{{guild}}.*$/g);
      if (!properusage) return message.channel.send('Please use the parameters: `{{user}}` and `{{guild}}`!');

      if (properusage) {
        await client.updateGuild(message.guild, {
          welcomeMsg: properusage,
        });

        return message.channel.send(`Welcome message has been updated to : ${properusage}`).catch((e) => console.log(e));
      }

      return message.channel.send(`The current welcome message is: ${settings.welcomeMsg || client.config.defaultSettings.welcomeMsg}`);
    }
    case 'modRole': {
      const role = message.mentions.roles.first();
      if (!role) return message.channel.send(`Please mention the role, ${message.author}`);

      if (role) {
        await client.updateGuild(message.guild, { modRole: role.id });

        return message.channel.send(`Mod role has been updated to ${role.name} with id ${role.id}`);
      }

      return message.channel.send(`The current Mod role is: ${settings.modRole ? message.guild.roles.get(settings.modRole).name : client.config.defaultSettings.modRole}`);
    }
    case 'adminRole': {
      const role = message.mentions.roles.first();
      if (!role) return message.channel.send(`Please mention the role , ${message.author}`);

      if (role) {
        await client.updateGuild(message.guild, { adminRole: role.id });

        return message.channel.send(`Admin role has been updated to ${role.name} with id ${role.id}`);
      }

      return message.channel.send(`The current Admin role is: ${settings.adminRole ? message.guild.roles.get(settings.adminRole).name : client.config.defaultSettings.adminRole}`);
    }

    case 'modLog': {
      const channel = message.mentions.channels.first();
      if (!channel) return message.channel.send(`Please mention a channel, ${message.author}`);

      if (channel) {
        await client.updateGuild(message.guild, {
          modLog: channel.name,
        });
        return message.channel.send(`Welcome channel has been set to ${channel}`).catch((e) => console.log(e));
      }
      return message.channel.send(`Current welcome channel: ${settings.modLog ? `<#${settings.modLog}>` : 'None'}`);
    }
    default: {
      const { welcomeChannel, welcomeMsg, modRole, adminRole, prefix, modLog } = settings;
      const embed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setFooter(`${client.user.tag}`, client.user.displayAvatarURL)
        .setTitle(`${message.guild.name} Configuration Menu`)
        .addField('❯ Welcome Channel:', `${welcomeChannel ? `<#${welcomeChannel}>` : 'Not Set'}`)
        .addField('❯ Welcome Message:', `${welcomeMsg || client.config.defaultSettings.welcomeMsg}`)
        .addField('❯ Mod Role:', `${modRole ? `<@&${modRole}>` : client.config.defaultSettings.modRole}`)
        .addField('❯ Admin Role:', `${adminRole ? `<@&${adminRole}>` : client.config.defaultSettings.adminRole}`)
        .addField('❯ Prefix:', `${prefix || client.config.prefix}`)
        .addField('❯ Mod Log:', `${modLog ? `<#${modLog}>` : 'Not Set'}`)
        .setThumbnail(message.guild.iconURL)
        .setTimestamp();
      return message.channel.send(embed);
    }
  }
};

exports.help = {
  name: 'config',
  description: 'Server Config',
  module: 'Config',
};
