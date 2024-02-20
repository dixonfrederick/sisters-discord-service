/* eslint-disable */
const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const google = require('images-scraper');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('google-images')
    .setDescription('Search for an image on Google')
    .addStringOption(option => option.setName('query').setDescription('Search for an image').setRequired(true)),

    async execute(interaction) {

        await interaction.deferReply();

        const { options } = interaction;
        const query = options.getString('query');

        const image = new google({
            puppeteer: {
                headless: true,
            },
        })

        const results = await image.scrape(query, 4);

        const mainEmbed = new EmbedBuilder().setURL('https://www.google.com/').setImage(results[0].url);
        const secondEmbed = new EmbedBuilder().setURL('https://www.google.com/').setImage(results[1].url);
        const thirdEmbed = new EmbedBuilder().setURL('https://www.google.com/').setImage(results[2].url);
        const fourthEmbed = new EmbedBuilder().setURL('https://www.google.com/').setImage(results[3].url);

        await interaction.editReply({ embeds: [mainEmbed, secondEmbed, thirdEmbed, fourthEmbed] });
    }
}