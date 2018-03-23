const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Nepu les gens !');
});
//msg1
client.on('message', message => {
    if (message.content === 'nepu') {
    	message.channel.send('NEPU NEPU !');
  	}
});
//msg2
client.on('message', message => {
    if (message.content === 'nepgya') {
    	message.channel.send('NEPGYAHHH ! （＊〇□〇)');
  	}
});
//help
client.on('message', message => {
    if (message.content === 'help') {
    	message.channel.send('nepu, nepgya, comehere');
  	}
});


client.login(process.env.BOT_TOKEN);

dispatcher.on('error', e => {
  // Catch any errors that may arise
  message.channel.send('marche pas :/');
});

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
          const dispatcher = connection.playFile('nepu-bot/song/nepupu.mp3');
          
        })
        .catch(console.log);
    } else {
      message.reply("Nepu ! Rejoins d'abord un channel !");
    }
  }
});
