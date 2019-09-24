const DBL = require('dblapi.js');
const { Guild } = require('../models');

exports.run = async (client) => {
  const dbl = new DBL(process.env.DISCORDBOTSAPI, client);
  console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
  client.user.setActivity('*help  ', { type: 'PLAYING' });
  setInterval(() => {
    dbl.postStats(client.guilds.size);
  }, 1800000);

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

  // USE ONCE to merge Money and Level into Profile
  /*
  const { Level, Money, Profile } = require('../models');
  const testLevel = await Level.find({});
  const testMoney = await Money.find({});

  for (let i = 0; i < testLevel.length; i++) {
    for (let j = 0; j < testMoney.length; j++) {
      if (testLevel[i].userID === testMoney[j].userID && testLevel[i].guildID === testMoney[j].guildID) {
        new Profile({
          userID: testMoney[i].userID,
          guildID: testMoney[i].guildID,
          money: testMoney[i].money || 1,
          cooldown: testMoney[i].cooldown || 0,
          level: testLevel[i].level || 1,
          xp: testLevel[i].xp || 1,
          xpToLevel: testLevel[i].xpToLevel || 100,
        }).save().catch((err) => console.error(err));
        break;
      }
      if (j === testMoney - 1) console.log('nothing found');
    }
  }
  */
};
