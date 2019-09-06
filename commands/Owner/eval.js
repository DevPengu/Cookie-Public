module.exports.run = async (client, message, args) => {

    let config = require("../../config.js")

    if (message.author.id !== config.owner) return message.channel.send("STRANGER!!! <a:runaway:573638188908937218>");

    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
 
      message.channel.send(client.clean(evaled), {code:"js"});
    } catch (err) {
        console.log(err)
      message.channel.send(`\`ERROR\` \`\`\`xl\n${client.clean(err)}\n\`\`\``);
    }
};

module.exports.help = {
    name: "eval",
    description: "Eval",
    module: "Owner"
}