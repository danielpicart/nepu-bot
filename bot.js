const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('Nepu les gens !');
});

//msg1
client.on('message', message => {
    if (message.content === 'nepu') {
    	message.channel.send('NEP NEP !!');
  	}
});

//msg2
client.on('message', message => {
    if (message.content === 'nepgya') {
    	message.channel.send('NEPGYYAAAAHHHHH !!! ヾ(@゜∇゜@)ノ');
  	}
});

//help
client.on('message', message => {
    if (message.content === 'nephelp') {
    	message.channel.send('nephelp, nepu, nepgya, nepcome.');
  	}
});

//arrivée d'un membre
client.on('guildMemberAdd', member => {
    channel.send(`Nepu ! ${member}, 'nephelp' pour avoir la liste des commandes`);
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Nepu ${member} !! 'nephelp' pour avoir la liste des commandes !`);
});

//connection channel vocal
client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'nepcome') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('Me voilà !');

        })
        .catch(console.log);
    } else {
      message.reply("Nepu ! Rejoins d'abord un channel !");
    }
  }
});

client.login(process.env.BOT_TOKEN);
