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
    	message.channel.send('Nep ! : nephelp, nepgit, nepu, nepgya, nepkappa, nepgud, nepthalassa, nep18+, nepcome.');
  	}
    if (message.content === 'nepgit') {
        message.channel.send('Nepupu ! Ici : https://tinyurl.com/ya4yy44v !');
    }
    if (message.content === 'nepkappa') {
        message.channel.send("", {files:["https://raw.githubusercontent.com/rouant/nepu-bot-stockage/master/pics/nepkappa.png"]});
    }
    if (message.content === 'nep18+') {
        message.channel.send("( ͡° ͜ʖ ͡°)", {files:["https://raw.githubusercontent.com/rouant/nepu-bot-stockage/master/vids/18+rated.mp4"]});
    }
    if (message.content === 'nepgud') {
        message.channel.send("Dat's gud nepu ! [ ͡⎚ヮ ͡⎚]", {files:["https://raw.githubusercontent.com/rouant/nepu-bot-stockage/master/pics/lookin4dagudstuff.png"]});
    }
    if (message.content === 'nepthalassa') {
        message.channel.send("(⌐■_■)", {files:["https://raw.githubusercontent.com/rouant/nepu-bot-stockage/master/vids/nepthalassa.mp4"]});
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
