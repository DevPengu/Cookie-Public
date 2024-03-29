exports.run = async (client, guild) => {
  try {
    const fetched = await guild.fetchMembers();
    if (fetched.size < 20 && fetched.filter((m) => m.user.bot).size > fetched.filter((m) => !m.user.bot).size) {
      guild.leave();
      return;
    }

    const newGuild = {
      guildID: guild.id,
      ownerID: guild.ownerID,
    };

    await client.createGuild(newGuild);
  } catch (error) {
    console.error(error);
  }
};
