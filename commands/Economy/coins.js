
const Discord = require("discord.js")
const mongoose = require("../../utils/mongoose")

const Money = require('../../models/money.js')

module.exports.run = async (client, message, args) => {

  
  let settings;
  try {
      settings = await client.getGuild(message.guild);
  } catch (error) {
      console.error(error);
  }

  //code command
  Money.findOne({
    userID: message.author.id,
    username: message.author.username,
    guildID: message.guild.id,
    guildName: message.guild.name
  },
                
  (err, Money) => {
  if(err) console.log(err);
    
    let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
              
    
    
    
 if(!Money) {
   embed.addField(`Rip, you have no coins. Try ${settings.prefix}daily! `, "0", true);
   return message.channel.send(embed);
   
     // const newMoney = new Money({
      //userID: message.author.id, 
     // serverID: message.guild.id,
        //money: coinstoadd
      //})
      
      //newMoney.save().catch(err => console.log(err));
      }else{
        embed.addField("Your current balance is", Money.money, true)
        return message.channel.send(embed);
      //Money.money = Money.money + coinstoadd;
       // Money.save().catch(err => console.log(err));
      
      
      }
  })
}

module.exports.help = {
   name: "coins",
  description: "Tells how many coins you have! :D",
  module: "Economy"
}