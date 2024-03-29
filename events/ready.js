const { Guild } = require('../models');

exports.run = async (client) => {
  const DBL = require('dblapi.js');
  const dbl = new DBL(process.env.DISCORDBOTSAPI, client);
  console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
  client.user.setActivity('*help  ', { type: 'PLAYING' });
  setInterval(() => {
    dbl.postStats(client.guilds.size);
  }, 1800000);


  const { Level } = require('../models');
  const test = await Level.updateMany({}, { xpToLevel: 100 });
  console.log(test);

  // Checks if any guilds added the bot while it was offline and if so then add them to the DB
  const guilds = client.guilds.map((g) => g.id);
  let dbGuilds = await Guild.find({});
  dbGuilds = dbGuilds.map((g) => g.guildID);


  for (let i = 0; i < guilds.length; i++) {
    let found = false;
    for (let j = 0; j < dbGuilds.length; j++) {
      if (guilds[i] === dbGuilds[j]) {
        found = true;
        break;
      }
    }
    if (found === false) {
      const guild = client.guilds.get(guilds[i]);
      const newGuild = {
        guildID: guild.id,
        ownerID: guild.ownerID,
      };

      await client.createGuild(newGuild);
    }
  }
};
