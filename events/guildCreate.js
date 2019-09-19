exports.run = async (client, guild) => {


    const fetched = await guild.fetchMembers()
if (20 > fetched.size && fetched.filter(m => m.user.bot).size > fetched.filter(m => !m.user.bot).size) { 
message.guild.leave() 
}


    const newGuild = {
        guildID: guild.id,
        guildName: guild.name,
        ownerID: guild.ownerID,
        ownerUsername: guild.owner.user.tag
    };

    try {
        await client.createGuild(newGuild);
    } catch (error) {
        console.error(error);
    }

};