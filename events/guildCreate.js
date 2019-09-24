exports.run = async (client, guild) => {
  try {
    const fetched = await guild.fetchMembers();
    if (fetched.size < 20 && fetched.filter((m) => m.user.bot).size > fetched.filter((m) => !m.user.bot).size) {
      guild.leave();
      return;
    }

    await client.createGuild({ guildID: guild.id, ownerID: guild.ownerID });
  } catch (error) {
    console.error(error);
  }
};
