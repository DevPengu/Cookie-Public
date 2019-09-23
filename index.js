const { Client, Collection } = require('discord.js');
require('dotenv-flow').config();

const client = new Client({
  disableEveryone: true,
});

require('./utils/functions')(client);
require('./utils/mongoose').init();

client.config = require('./config.js');

const { config } = require('dotenv-flow');


// Collections
client.commands = new Collection();
client.aliases = new Collection();

config({
  path: `${__dirname}/.env`,
});

// Run the command loader
['command', 'event'].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

client.login();
