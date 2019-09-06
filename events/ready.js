exports.run = async(client) => {
    const DBL = require("dblapi.js");;
    const dbl = new DBL(process.env.DISCORDBOTSAPI, client);
    console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
    client.user.setActivity("*help  ", {type: "PLAYING"});
    setInterval(() => {
    dbl.postStats(client.guilds.size);
    }, 1800000); 
}