/* eslint-disable */
const { SlashCommandBuilder } = require('@discordjs/builders');
// TEMPLATE FOR SLASH COMMANDS
module.exports = {
	data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('test'),
    async execute(interaction, client) {
        await interaction.reply({content: 'test'});
    }
}