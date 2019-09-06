const Money = require('../../models/money.js')

const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
  if(message.member.id != message.guild.owner.id)
return message.reply("Only the owner of the guild can execute this command!")

     const user = message.mentions.users.first() || bot.users.get(args[0]);
    if(!user) return message.reply("You must mention someone or give their ID!");
   const coinstoadd = parseInt(args[1], 10);
    if(!coinstoadd) return message.reply("You didn't tell me how many coins to give ...");
  
   Money.findOne({
 userID: user.id, 
userName: user.name,
 guildID: message.guild.id,
guildName: message.guild.name
 },(err, money) =>{
 if(err) console.log(err);
 if(!money){
 const newMoney = new Money({
 userID: user.id,
userName: user.name,
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

  
message.channel.send(`You gave ${coinstoadd} coins to ${user}!!`).then(message => message.delete(5000))
}
module.exports.help = {
    name: "pay",
    description: "Guild owner only, give a user points",
  module: "Mod"
}