const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Nepu les gens !');
});

client.on('message', message => {
    if (message.content === 'nepu') {
    	message.channel.send('NEPU NEPU !');
  	}
});

client.on('message', message => {
    if (message.content === 'nepgya') {
    	message.channel.send('NEPGYAHHH ! （＊〇□〇)');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'comehere') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('NEPU ! Me voici !');
        })
        .catch(console.log);
    } else {
      message.reply('Nepu ! Rejoins d abord un channel');
    }
  }
});
