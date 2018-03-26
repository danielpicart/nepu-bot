const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('Nepu les gens !');
});

//msg
client.on('message', message => {
    if (message.content === 'nepu') {
    	message.channel.send('NEPU NEPU !!');
  	}
    if (message.content === 'nepgya') {
    	message.channel.send('NEPGYYAAAAHHHHH !!! ヾ(@゜∇゜@)ノ');
  	}
    if (message.content === 'nephelp') {
    	message.channel.send('Nep ! : nephelp, nepu, nepgya, nepcome, nepgit.');
  	}
    if (message.content === 'nepgit') {
        message.channel.send('Nepupu ! Ici : https://tinyurl.com/ya4yy44v !');
    }
    if (message.content === 'nepkappa') {
        message.channel.send("", {files: ["https://drive.google.com/file/d/1JM3eDtbZ1xEMtCu0XFiwRIn6dQGYkP8s/view"]});
    }
    
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
        
//NECESSAIRE NE PAS TOUCHER
client.login(process.env.BOT_TOKEN);
