const Discord = require('discord.js')
exports.run = async(client, message) => {


  if (message.author.bot) return;

    if (message.channel.type === "dm") {  
    let authorid = message.author.id;
    let server = client.guilds.get("513056225047609344")
    let dmembed = new Discord.RichEmbed()
    .setTitle(`New DM message!`)
    .setDescription(`Sent by: ${message.author.username}${message.author.discriminator}`)
    .addField(`${message.content}`, `Test`)
    .setFooter(`Message sent at: ${message.createdAt}`)
    const channel = server.channels.find(c => c.name === authorid);
    if(channel){
    channel.send(dmembed);
    }else{
    server.createChannel(authorid, "text").then(newchannel => newchannel.send(dmembed));
    }
    message.reply("Thank you! We will look into this! If this is a valid support ticket we will try to contact you for more information. Please join the support server for more information about this process. ***__PLEASE DO NOT ATTEMPT COMMANDS IN DMS!__*** All dms are registered as tickets and viewed by the bot creators. Therefore, we can see when you attempt to use commands.").then(message => message.delete(10000))
    }


    let settings;
    try {
        settings = await client.getGuild(message.guild);
    } catch (error) {
        console.error(error);
    }



    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

if (message.content.startsWith(settings.prefix)){
  const cmd = client.commands.get(command);
  if (!cmd) return;

  cmd.run(client, message, args, settings);
} else {   
  const Money = require('../models/money.js')
let coinstoadd = 1
Money.findOne({
userID: message.author.id,
username: message.author.username,
guildID: message.guild.id,
guildName: message.guild.name
},(err, money) =>{
if(err) console.log(err);
if(!money){
const newMoney = new Money({
userID: message.author.id,
username: message.author.username,
guildID: message.guild.id,
guildName: message.guild.name,
money: coinstoadd,
cooldown: 0 

})
newMoney.save().catch(err => console.log(err));
}else {
money.money = money.money +coinstoadd;
money.save().catch(err => console.log(err));
}
})
}

 
    
   //LEVEL CODING
    const Xp = require('../models/level.js')
    let xptoadd = 1
    Xp.findOne({
      userID: message.author.id,
      username: message.author.username,
      guildID: message.guild.id,
      guildName: message.guild.name
    },(err, xp) =>{
    if(err) console.log(err);
    if(!xp){
      const newXp = new Xp({
        userID: message.author.id,
        username: message.author.username,
        guildID: message.guild.id,
        guildName: message.guild.name,
        xp: xptoadd,
        level: 1,
        xpToAdd: 100
        })
      newXp.save().catch(err => console.log(err));
      }else {
      xp.xp = xp.xp +xptoadd;
      if (xp.xp > xp.xpToLevel)
      xp.level = xp.level + 1
      xp.xpToLevel = xp.xpToLevel + 100 + (25 * xp.level)
      xp.save().catch(err => console.log(err));
      }})
    }
      