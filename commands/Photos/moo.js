const Discord = require("discord.js");
const fetch = require("node-fetch");
const fs = require("fs")

module.exports.run = async (client, message, args) => {
let path = '././assets/moo/';
let files = fs.readdirSync(path);
let chosenFile = files[Math.floor(Math.random() * files.length)];
const attachment = new Discord.Attachment(path+chosenFile, chosenFile);
message.channel.send(attachment);
};

module.exports.help = {
    name: "moo",
    description: "Sends an adorable moomoo!",
    module: "Photos"
}