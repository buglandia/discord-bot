import * as Discord from 'discord.js';
const Client = new Discord.Client();

Client.on('ready', async () => {
  console.log('BOT successfully initialized!');
});

Client.login(process.env.TOKEN || 'token');
