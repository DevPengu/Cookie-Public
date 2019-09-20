    const { Client, Collection } = require('discord.js');
    const fs = require('fs');
    require('dotenv-flow').config();
    
    const client = new Client({
        disableEveryone: true
    })
    
    require('./utils/functions')(client);

    client.mongoose = require('./utils/mongoose');
    client.config = require('./config.js');


    const { config } = require("dotenv-flow");

  
    
    // Collections
    client.commands = new Collection();
    client.aliases = new Collection();
    
    config({
        path: __dirname + "/.env"
    });
    
    // Run the command loader
    ["command, event"].forEach(handler => {
        require(`./handlers/${handler}`)(client);
    });
    


client.mongoose.init();
client.login();