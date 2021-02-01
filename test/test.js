const Discord = require('discord.js');
const package = require('../src/index');

const client = new Discord.Client({
	fetchAllMembers: true,
});

client.on('ready', async () => {
	console.log(`${client.user.tag} is online!`);
});

client.on('message', async (message) => {
	if (message.content === '!mybadges') {
		const user = client.users.cache.get(message.author.id);
		package.badges(user)
			.then(response => {
				let result = '';
				for (let i = 0; i < response.length; i++) {
					result += `**${response[i].name} :** ${response[i].url}\n`;
				}
				return message.channel.send(result);
			}).catch(e => {
				console.log(e);
				return message.channel.send('You don\'t have any Discord Badges.');
			});
	}
});

client.login('DISCORD_BOT_TOKEN');