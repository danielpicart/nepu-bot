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
    	message.channel.send('Nep ! : nephelp, nepgit, nepu, nepgya, nepkappa, nepgud, nepuganda, nepuvult, neptroll, nepthalassa, neplewd, nepcome.');
  	}
    if (message.content === 'nepgit') {
        message.channel.send('Nepupu ! Ici : https://tinyurl.com/ya4yy44v !');
    }
    if (message.content === 'nepkappa') {
        message.channel.send("", {files:["https://raw.githubusercontent.com/rouant/nepu-bot-stockage/master/pics/nepkappa.png"]});
    }
    if (message.content === 'neplewd') {
        message.channel.send("( ͡° ͜ʖ ͡°)", {files:["https://raw.githubusercontent.com/rouant/nepu-bot-stockage/master/vids/18+rated.mp4"]});
    }
    if (message.content === 'nepgud') {
        message.channel.send("Dat's gud nepu ! [ ͡⎚ヮ ͡⎚]", {files:["https://raw.githubusercontent.com/rouant/nepu-bot-stockage/master/pics/lookin4dagudstuff.png"]});
    }
    if (message.content === 'nepthalassa') {
        message.channel.send("(⌐■_■)", {files:["https://raw.githubusercontent.com/rouant/nepu-bot-stockage/master/vids/nepthalassa.mp4"]});
    }
    if (message.content === 'nepuganda') {
        message.channel.send("Do u kno da nep ?", {files:["https://raw.githubusercontent.com/rouant/nepu-bot-stockage/master/pics/do_u_kno_da_nep.png"]});
    }
    if (message.content === 'nepuvult') {
        message.channel.send("We will take Nepuzalem !!! (☄ฺ◣д◢)☄ฺ", {files:["https://raw.githubusercontent.com/rouant/nepu-bot-stockage/master/pics/nepuvultmeme.png"]});
    }
    if (message.content === 'neptroll') {
        message.channel.send("", {files:["https://raw.githubusercontent.com/rouant/nepu-bot-stockage/master/pics/neptroll.png"]});
    }
    if (message.content === 'nepoff') {
        message.channel.send("Es-tu sûr de ce que tu nep ? Eteins-moi avec un deuxième nepoff");
        client.on('message', message => {
            if (message.content === 'nepoff') {
                message.channel.send("Nepu ! Bonne nu--Nep!");
                heroku ps:scale web=0 --app nepubotbyshody
                heroku ps:scale worker=0 --app nepubotbyshody
            }
        });
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
          const dispatcher = connection.playFile('https://raw.githubusercontent.com/rouant/nepu-bot-stockage/master/songs/nepupu.mp3');

        })
        .catch(console.log);
    } else {
      message.reply("Nepu ! Rejoins d'abord un channel !");
    }
  }
});
        
//NECESSAIRE NE PAS TOUCHER
client.login(process.env.BOT_TOKEN);
