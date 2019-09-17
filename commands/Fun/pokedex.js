const fetch = require('node-fetch');
const Discord = require('discord.js');
const request = require("request");
const rp = require("request-promise");
var http = require('http-https');
var fs = require('fs');

module.exports.run = async (client, message, args) => {

  const pokemon = args.join(" ");
  
  if (!pokemon) return message.channel.send("Give me the NAME of a pokemon!")
  
  else
  
  var bin;
  await rp(process.env.POKEMON + pokemon)
  .then(function (htmlString) {
      bin = JSON.parse(htmlString);
  })
  
  
  if(bin.error == 404) return message.channel.send(bin.message);
  
  
  
      let hp = bin.stats.hp
      let attack = bin.stats.attack
      let description = bin.description
      let type = bin.type
      let weight = bin.weight
      let id = bin.id
      let height = bin.height
      let species = bin.species
      let abilities = bin.abilities
      let defense = bin.stats.defense
      let sp_atk = bin.stats.sp_atk
      let sp_def = bin.stats.sp_def
      let speed = bin.stats.speed
      let total = bin.stats.total
      let gender = bin.gender
      let gen = bin.generation
      let eggs = bin.egg_groups
      let evos = bin.family.evolutionStage
      let evo = bin.family.evolutionLine
      let sprite = bin.sprites.normal
  
      const file = fs.createWriteStream("pokemon.png");
      const request = http.get(`https://i.some-random-api.ml/pokemon/${pokemon}.png`, async function(response) {
        const attachment = new Discord.Attachment('./pokemon.png', 'pokemon.png');
        await response.pipe(file);
  
  let embed = new Discord.RichEmbed()
  
  .setTitle("Pokedex Entry for " + pokemon)
  .setColor("#f7d4f1")
  .setDescription("Pokedex entry number " + id)
  .addField("Type", type)
  .addField("Species", species)
  .addField("Abilities", abilities)
  .addField("Height", height)
  .addField("Weight", weight)
  .addField("Gender", gender)
  .addField("Egg Groups", eggs)
  .addField("Stats:", ".")
  .addField("HP", hp, true)
  .addField("Attack", attack, true)
  .addField("Defense", defense, true)
  .addField("Special Attack", sp_atk, true)
  .addField("Special Defense", sp_def, true)
  .addField("Speed", speed, true)
  .addField("Total", total, true)
  .addField("Evolution Stage", evos)
  .addField("Evolution Line", evo.length ? evo: "none") //if empty return none
  .addField("Description", description)
  .addField("Generation", gen)
  .attachFile(attachment)
  .setThumbnail('attachment://pokemon.png')
  
  await message.channel.send(embed);
  fs.unlink(`./pokemon.png`);
  });

}

module.exports.help = {
    name: "pokedex",
    description: 'pokedex',
    module: 'Fun'
}