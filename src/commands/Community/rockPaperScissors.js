/* eslint-disable */
const { SlashCommandBuilder } = require('@discordjs/builders');
const { RockPaperScissors } = require('discord-gamecord');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('rock-paper-scissors')
    .setDescription('Start a game of Rock Paper Scissors')
    .addUserOption(option => option.setName('opponent').setDescription('Your Opponent').setRequired(true)),

    async execute(interaction, client) {
        const { options } = interaction;
        const opponent = options.getUser('opponent');

        const Game = new RockPaperScissors({
            message: interaction,
            isSlashGame: true,
            opponent: opponent,
            embed: {
                title: 'Rock Paper Scissors',
                description: 'Press a button below to choose!',
                color: '#5865F2',
                footer: 'Rock Paper Scissors'
            },
            buttons: {
                rock: 'Rock',
                paper: 'Paper',
                scissors: 'Scissors',
            },
            mentionUser: true,
            timeoutTime: 60000,
            buttonStyle: 'PRIMARY',
        });

        Game.startGame();
    }
}