const mongoose = require('mongoose');
const { Guild } = require('../models');

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

  client.clean = (text) => {
    if (typeof (text) === 'string') {
      return text.replace(/`/g, `\`${String.fromCharCode(8203)}`).replace(/@/g, `@${String.fromCharCode(8203)}`);
    }
    return text;
  };
};
