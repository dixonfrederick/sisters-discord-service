/* eslint-disable */
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { RsnChat } = require('rsnchat');
 
const rsnchat = new RsnChat(process.env.RSN_API_KEY); 

module.exports = {
    data: new SlashCommandBuilder()
        .setName('chat-gpt')
        .setDescription('Ask me something')
        .addStringOption(option => option.setName('prompt').setDescription('Your Message').setRequired(true))
        .setDMPermission(false),

    async execute(interaction) {
        await interaction.deferReply(); 

        const prompt = interaction.options.getString('prompt');

        try {
            const response = await rsnchat.gpt(prompt); 

            const words = response.message.split(' ');
            
            if (response.message.length > 2000) {
                // const chunks = response.message.match(/(.|[\r\n]){1,2000}/g);
                const chunks = [];
                let currentChunk = '';
                var intResponse = 1;

                for (const word of words) {
                    // Check if adding the next word will exceed the character limit
                    if ((currentChunk + ' ' + word).length <= 2000) {
                        // If not, add the word to the current chunk
                        currentChunk += ' ' + word;
                    } else {
                        // If adding the word exceeds the limit, push the current chunk to the chunks array
                        chunks.push(currentChunk);
                        // Start a new chunk with the current word
                        currentChunk = word;
                    }
                }

                chunks.push(currentChunk);

                chunks.forEach(chunk => {
                    if (intResponse == 1) {
                        intResponse = 0;
                        return interaction.editReply({ content: `${chunk}`});
                    }
                    else{
                        interaction.channel.send(chunk);
                    }
                });
            } 
            else {
                await interaction.editReply({ content: response.message });
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({ content: 'An error occurred. Please try again later.'});
        }
    }
};