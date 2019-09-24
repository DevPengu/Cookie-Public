const mongoose = require('mongoose');
const { Guild, Profile } = require('../models');

module.exports = (client) => {
  client.getGuild = async (guild) => {
    const data = await Guild.findOne({ guildID: guild.id });
    if (data) return data;
    return client.config.defaultSettings;
  };

  client.updateGuild = async (guild, settings) => {
    let data = await client.getGuild(guild);

    if (typeof data !== 'object') data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
      else return;
    }

    console.log(`Guild "${data.guildID}" updated settings: ${Object.keys(settings)}`);
    return await data.updateOne(settings);
  };

  client.createGuild = async (settings) => {
    const defaults = { _id: mongoose.Types.ObjectId(), ...client.config.defaultSettings };
    const merged = Object.assign(defaults, settings);

    const newGuild = await new Guild(merged);
    return newGuild.save()
      .then(console.log(`Default settings saved for guild (${merged.guildID})`));
  };

  client.createProfile = async (settings) => {
    const defaults = {
      money: 1, cooldown: 0, xp: 1, level: 1, xpToLevel: 100,
    };
    const merged = Object.assign(defaults, settings);

    const newProfile = await new Profile(merged);
    return newProfile.save();
  };
  
  client.getProfile = async (member) => {
    const data = await Profile.findOne({ userID: member.user.id, guildID: member.guild.id });
    if (data) return data;
    const newProfile = await this.createProfile({ userID: member.user.id, guildID: member.guild.id });
    return newProfile;
  };

  client.clean = (text) => {
    if (typeof (text) === 'string') {
      return text.replace(/`/g, `\`${String.fromCharCode(8203)}`).replace(/@/g, `@${String.fromCharCode(8203)}`);
    }
    return text;
  };
};
