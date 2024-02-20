/* eslint-disable */
const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');
const wiki = require('wikijs').default;

module.exports = {
	data: new SlashCommandBuilder()
    .setName('wiki')
    .setDescription('Ask Wikipedia a question')
    .addStringOption(option => option.setName('query').setDescription('Search Wikipedia').setRequired(true)),

    async execute(interaction) {

        const query = interaction.options.getString('query');

        await interaction.deferReply();

        const search = await wiki().search(query);
        if (!search.results.length) return await interaction.editReply({ content: 'No results found.' });

        const result = await wiki().page(search.results[0]);

        const summary = await result.summary();
        if (summary.length > 8192) return await interaction.reply({ content: `${summary.slice(0, 2048)}`, ephemeral: true});
        else {
            const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`About: ${result.raw.title}`)
            .setDescription(`\`\`\`${summary.slice(0, 2048)}\`\`\``)

            await interaction.editReply({ embeds: [embed] });
        }

    }
}