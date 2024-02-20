/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
require('dotenv').config(); // to start process from .env file
const { Client, GatewayIntentBits, ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, Collection } = require('discord.js');
const fs = require('fs');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.commands = new Collection();

const functions = fs.readdirSync('./src/functions').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync('./src/commands');

(async () => {
    for (file of functions) {
        require(`./src/functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, './src/events');
    client.handleCommands(commandFolders, './src/commands');
    client.login(process.env.TOKEN);
})();

client.on('messageCreate', async (message) => {
	// if (message.content.charAt(0) === '-') {
	if (!message.author.bot) {
		// CHAT COMMANDS
		if (message.content.toLowerCase() === 'hy') {
			message.channel.send('hy');
		}
		else if (message.content.substring(0, 5).toLowerCase() === 'spam ') {
			const splitMsg = message.content.split(' ');
			if (splitMsg.length > 2) {
				let res = '';
					for (let i = 2; i < splitMsg.length; i++) {
						res = res.concat(splitMsg[i] + ' ');
					}
					for (let i = 0; i < parseInt(splitMsg[1]) && i < 5; i++) {
						message.channel.send(res);
					}
			}
		}
		else if (message.content.substring(0, 5).toLowerCase() === 'echo ') {
			const splitMsg = message.content.split(' ');
			if (splitMsg.length > 1) {
				let res = '';
				for (let i = 1; i < splitMsg.length; i++) {
					res = res.concat(splitMsg[i] + ' ');
				}
				message.channel.send('**' + res.substring(0, res.length - 1) + '**' + ', says Misaka.');
			}
		}
		else if (message.content.substring(0, 5).toLowerCase() === '-rev ' || message.content.substring(0, 9).toLowerCase() === '-reverse ') {
			const splitMsg = message.content.split(' ');
			if (splitMsg.length > 1) {
				let res = '';
				for (let i = 1; i < splitMsg.length; i++) {
					res = res.concat(splitMsg[i] + ' ');
				}
				message.channel.send(res.substring(0, res.length - 1).split('').reverse().join(''));
			}
		}
		else if (message.content.toLowerCase() === '-about') {
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setLabel('More About Misaka')
                        .setStyle(ButtonStyle.Link)
                        .setURL('https://toarumajutsunoindex.fandom.com/wiki/Misaka_Mikoto'),
                    new ButtonBuilder()
                        .setLabel('MAL page')
                        .setStyle(ButtonStyle.Link)
                        .setURL('https://myanimelist.net/character/13701/Mikoto_Misaka'),
                    new ButtonBuilder()
                        .setLabel('Railgun series')
                        .setStyle(ButtonStyle.Link)
                        .setURL('https://ww4.gogoanimes.org/category/to-aru-kagaku-no-railgun'),
                );
            const embed = new EmbedBuilder()
			    .setColor(0x0099FF)
			    .setTitle('Misaka Mikoto')
			    .setDescription('Mikoto Misaka is one of the series main heroines in Toaru Majutsu no Index series and the protagonist of her side story, Toaru Kagaku no Railgun. A psychic user of Academy City, her powers are ranked Level 5, the highest rank for the most powerful psychic users, and she ranks as third-strongest out of the seven people who hold this rank in Academy City.');
            message.reply({ content: 'About Misaka.', embeds: [embed], components: [row] });
        }
        else if (message.content.toLowerCase() === '-ver' || message.content.toLowerCase() === '-patch') {
            const embed = new EmbedBuilder()
			    .setColor(0x0099FF)
			    .setTitle('Patch Notes')
			    .setDescription('- Discord.js ver 14.10.2\n' +
                                '- Added slash commands \n');
            message.channel.send({ content: '', embeds: [embed] });
        }
	}
	// }
});