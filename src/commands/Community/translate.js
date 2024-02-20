/* eslint-disable */
const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');
const translate = require('@iamtraction/google-translate');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('translate')
    .setDescription('Translate something')
    .addStringOption(option => option.setName('text').setDescription('Text to translate').setRequired(true))
    .addStringOption(option => option.setName('language').setDescription('Language to translate to').addChoices(
        { name: 'English', value: 'en' },
        { name: 'Spanish', value: 'es' },
        { name: 'French', value: 'fr' },
        { name: 'German', value: 'de' },
        { name: 'Italian', value: 'it' },
        { name: 'Dutch', value: 'nl' },
        { name: 'Portuguese', value: 'pt' },
        { name: 'Russian', value: 'ru' },
        { name: 'Japanese', value: 'ja' },
        { name: 'Korean', value: 'ko' },
        { name: 'Chinese Simplified', value: 'zh-cn' },
        { name: 'Chinese Traditional', value: 'zh-tw' },
        { name: 'Arabic', value: 'ar' },
        { name: 'Turkish', value: 'tr' },
        { name: 'Hindi', value: 'hi' },
        { name: 'Indonesian', value: 'id' },
        { name: 'Vietnamese', value: 'vi' },
        { name: 'Thai', value: 'th' },
        { name: 'Hebrew', value: 'iw' },
        { name: 'Greek', value: 'el' },
        { name: 'Swedish', value: 'sv' },
        { name: 'Filipino', value: 'tl' },
        { name: 'Malay', value: 'ms' },
        { name: 'Javanese', value: 'jw' },
        { name: 'Sundanese', value: 'su' },
        ).setRequired(true)),
    
    async execute(interaction) {

        const { options } = interaction;
        const text = options.getString('text');
        const lan = options.getString('language');

        await interaction.reply({content: 'Translating...'});

        const applied = await translate(text, { to: `${lan}` });

        const embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Translated Text')
        .addFields({ name: 'Original Text', value: `\`\`\`${text}\`\`\``, inline: false })
        .addFields({ name: `Translated Text (${lan})`, value: `\`\`\`${applied.text}\`\`\``, inline: false })

        await interaction.editReply({content: '', embeds: [embed]});
    }
}