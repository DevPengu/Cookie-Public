  const Money = require('../../models/money.js')

  module.exports.run = async (client, message, args) => {
    
    const coinstoadd = 250

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
  cooldown: Date.now() +  86400000
  })
  message.channel.send(`You got ${coinstoadd} coins!!`).then(message => message.delete(5000))
  newMoney.save().catch(err => console.log(err));

  }else {
  if ( money.cooldown <= Date.now()){
  money.money = money.money +coinstoadd;
  money.cooldown = Date.now() + 86400000 
  message.channel.send(`You got ${coinstoadd} coins!!`).then(message => message.delete(5000))
  money.save().catch(err => console.log(err));
  }else{

    let date = new Date(money.cooldown);
    function msToTime(duration) {
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;
    
      return hours + ":" + minutes + ":" + seconds
    }

  message.channel.send(`You have already claimed your daily! Come back in ${msToTime(money.cooldown - Date.now())}    `)
  }}
  })
  

  }

  module.exports.help = {
  name: "daily",
  description: "Get some coins!",
    module: "Economy"
    }
  