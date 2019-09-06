const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let member = message.mentions.users.first()
       if(!args[0]) {
var sayings2 = [
"🏹You shoot at nothing, and hit nothing.",
"🔫The gun clicks, its chamber empty as you attempt to shoot the air",
"💥 You blew yourself up. Nice going idiot. Maybe try *throwing* the bomb next time?",
"You shot into the void and nothing happened, nice one! 🎉",
"🗡 You play the knife game and kill nobody but yourself.",
"You swing your knife at air, not really targeting anything. How's that working for you? 🤦🏻",
"You play the knife game and cut your own hand off, dying from blood loss. 👏🏻",
]

var result2 = Math.floor(Math.random() * sayings2.length);
  message.channel.send(sayings2[result2]);
   }   
    if(member){
      if(member.id === message.author.id){
  message.channel.send("Suicide isn't the answer. Things will get better in time.❤") 
  } else {
    var sayings1 = [
      `You throw a bomb at ${member} 💥💥💥💥💥`,
      `🗡 You brought a knife to a gunfight, ${member} takes you out`,
       `🔫 You shoot ${member} point blank. No remorse.`,
      `🗡 You stab ${member} in the back of the heart!`,
        `${member} laughs at you as you slip and fall!`,
        `${member} looks at you in shock as they fall to the ground after you shoot them in the heart!💔`,
        `${member} looks at you with amusement as nothing happens`,
     `💣 Your bomb fails to detonate, ${member} looks at you in shame.`
  ];
  
          var result1 = Math.floor(Math.random() * sayings1.length);
          message.channel.send(sayings1[result1])
  }
}
    }

  module.exports.help = {
    name: "kill",
    description:"It's a kill command ...",
    module: "Fun"
  }