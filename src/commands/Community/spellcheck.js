/* eslint-disable */
const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');
const spellcheck = require('simple-spellchecker');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('spellcheck')
    .setDescription('Spellcheck a word')
    .addStringOption(option => option.setName('word').setDescription('Word to check').setRequired(true)),

    async execute(interaction) {

        await interaction.deferReply();

        const { options } = interaction;
        const word = options.getString('word');

        const embed = new EmbedBuilder()
        .setColor(0x0099FF);

        spellcheck.getDictionary('en-US', async function (err, dictionary) {
            if (!err) {
                const misspelled = ! dictionary.spellCheck(word);

                if (misspelled) {
                    const suggestions = dictionary.getSuggestions(word);
                    embed
                    .setTitle('Misspelled Word')
                    .setDescription(`\`${word}\` is misspelled. Did you mean: ${suggestions.join(', ') || 'No suggestions available'}`);
                }
                else {
                    embed
                    .setTitle('Correct Spelling')
                    .setDescription(`\`${word}\` is spelled correctly.`);
                }
            }
            await interaction.editReply({ embeds: [embed] });
        });

    }
}