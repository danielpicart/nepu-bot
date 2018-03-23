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
    	message.reply('NEPGYAHHH !');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
