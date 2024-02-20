/* eslint-disable */
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { RsnChat } = require('rsnchat');
 
const rsnchat = new RsnChat(process.env.RSN_API_KEY); 

module.exports = {
    data: new SlashCommandBuilder()
        .setName('image-gen')
        .setDescription('Generates an image based on your prompt.')
        .addStringOption(option =>
            option.setName('prompt')
                .setDescription('The description of the image you want to create.')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('model')
            .setDescription('Select the image generation model.')
            .setRequired(true)
            .addChoices(
                // { "name": "3Guofeng3_v34.safetensors [50f420de]", "value": "3Guofeng3_v34.safetensors [50f420de]" },
                // { "name": "absolutereality_V16.safetensors [37db0fc3]", "value": "absolutereality_V16.safetensors [37db0fc3]" }, // WORK
                { "name": "absolutereality_v181.safetensors [3d9d4d2b]", "value": "absolutereality_v181.safetensors [3d9d4d2b]" },
                // { "name": "amIReal_V41.safetensors [0a8a2e61]", "value": "amIReal_V41.safetensors [0a8a2e61]" },
                { "name": "analog-diffusion-1.0.ckpt [9ca13f02]", "value": "analog-diffusion-1.0.ckpt [9ca13f02]" },
                // { "name": "anythingv3_0-pruned.ckpt [2700c435]", "value": "anythingv3_0-pruned.ckpt [2700c435]" }, // WORK
                { "name": "anything-v4.5-pruned.ckpt [65745d25]", "value": "anything-v4.5-pruned.ckpt [65745d25]" },
                { "name": "anythingV5_PrtRE.safetensors [893e49b9]", "value": "anythingV5_PrtRE.safetensors [893e49b9]" },
                { "name": "AOM3A3_orangemixs.safetensors [9600da17]", "value": "AOM3A3_orangemixs.safetensors [9600da17]" },
                // { "name": "blazing_drive_v10g.safetensors [ca1c1eab]", "value": "blazing_drive_v10g.safetensors [ca1c1eab]" },
                // { "name": "cetusMix_Version35.safetensors [de2f2560]", "value": "cetusMix_Version35.safetensors [de2f2560]" },
                // { "name": "childrensStories_v13D.safetensors [9dfaabcb]", "value": "childrensStories_v13D.safetensors [9dfaabcb]" },
                // { "name": "childrensStories_v1SemiReal.safetensors [a1c56dbb]", "value": "childrensStories_v1SemiReal.safetensors [a1c56dbb]" },
                // { "name": "childrensStories_v1ToonAnime.safetensors [2ec7b88b]", "value": "childrensStories_v1ToonAnime.safetensors [2ec7b88b]" },
                // { "name": "Counterfeit_v30.safetensors [9e2a8f19]", "value": "Counterfeit_v30.safetensors [9e2a8f19]" },
                // { "name": "cuteyukimixAdorable_midchapter3.safetensors [04bdffe6]", "value": "cuteyukimixAdorable_midchapter3.safetensors [04bdffe6]" },
                // { "name": "cyberrealistic_v33.safetensors [82b0d085]", "value": "cyberrealistic_v33.safetensors [82b0d085]" },
                // { "name": "dalcefo_v4.safetensors [425952fe]", "value": "dalcefo_v4.safetensors [425952fe]" },
                { "name": "deliberate_v2.safetensors [10ec4b29]", "value": "deliberate_v2.safetensors [10ec4b29]" },
                // { "name": "deliberate_v3.safetensors [afd9d2d4]", "value": "deliberate_v3.safetensors [afd9d2d4]" },
                // { "name": "dreamlike-anime-1.0.safetensors [4520e090]", "value": "dreamlike-anime-1.0.safetensors [4520e090]" },
                { "name": "dreamlike-diffusion-1.0.safetensors [5c9fd6e0]", "value": "dreamlike-diffusion-1.0.safetensors [5c9fd6e0]" },
                { "name": "dreamlike-photoreal-2.0.safetensors [fdcf65e7]", "value": "dreamlike-photoreal-2.0.safetensors [fdcf65e7]" },
                { "name": "dreamshaper_6BakedVae.safetensors [114c8abb]", "value": "dreamshaper_6BakedVae.safetensors [114c8abb]" },
                // { "name": "dreamshaper_7.safetensors [5cf5ae06]", "value": "dreamshaper_7.safetensors [5cf5ae06]" }, // WORK
                { "name": "dreamshaper_8.safetensors [9d40847d]", "value": "dreamshaper_8.safetensors [9d40847d]" },
                // { "name": "edgeOfRealism_eorV20.safetensors [3ed5de15]", "value": "edgeOfRealism_eorV20.safetensors [3ed5de15]" },
                { "name": "EimisAnimeDiffusion_V1.ckpt [4f828a15]", "value": "EimisAnimeDiffusion_V1.ckpt [4f828a15]" },
                { "name": "elldreths-vivid-mix.safetensors [342d9d26]", "value": "elldreths-vivid-mix.safetensors [342d9d26]" },
                // { "name": "epicrealism_naturalSinRC1VAE.safetensors [90a4c676]", "value": "epicrealism_naturalSinRC1VAE.safetensors [90a4c676]" },
                // { "name": "ICantBelieveItsNotPhotography_seco.safetensors [4e7a3dfd]", "value": "ICantBelieveItsNotPhotography_seco.safetensors [4e7a3dfd]" },
                // { "name": "juggernaut_aftermath.safetensors [5e20c455]", "value": "juggernaut_aftermath.safetensors [5e20c455]" },
                // { "name": "lofi_v4.safetensors [ccc204d6]", "value": "lofi_v4.safetensors [ccc204d6]" },
                { "name": "lyriel_v16.safetensors [68fceea2]", "value": "lyriel_v16.safetensors [68fceea2]" },
                // { "name": "majicmixRealistic_v4.safetensors [29d0de58]", "value": "majicmixRealistic_v4.safetensors [29d0de58]" },
                { "name": "mechamix_v10.safetensors [ee685731]", "value": "mechamix_v10.safetensors [ee685731]" },
                { "name": "meinamix_meinaV9.safetensors [2ec66ab0]", "value": "meinamix_meinaV9.safetensors [2ec66ab0]" },
                { "name": "meinamix_meinaV11.safetensors [b56ce717]", "value": "meinamix_meinaV11.safetensors [b56ce717]" },
                // { "name": "neverendingDream_v122.safetensors [f964ceeb]", "value": "neverendingDream_v122.safetensors [f964ceeb]" },
                { "name": "openjourney_V4.ckpt [ca2f377f]", "value": "openjourney_V4.ckpt [ca2f377f]" },
                // { "name": "pastelMixStylizedAnime_pruned_fp16.safetensors [793a26e8]", "value": "pastelMixStylizedAnime_pruned_fp16.safetensors [793a26e8]" },
                { "name": "portraitplus_V1.0.safetensors [1400e684]", "value": "portraitplus_V1.0.safetensors [1400e684]" },
                // { "name": "protogenx34.safetensors [5896f8d5]", "value": "protogenx34.safetensors [5896f8d5]" },
                // { "name": "Realistic_Vision_V1.4-pruned-fp16.safetensors [8d21810b]", "value": "Realistic_Vision_V1.4-pruned-fp16.safetensors [8d21810b]" }, // WORK
                // { "name": "Realistic_Vision_V2.0.safetensors [79587710]", "value": "Realistic_Vision_V2.0.safetensors [79587710]" }, // WORK
                { "name": "Realistic_Vision_V4.0.safetensors [29a7afaa]", "value": "Realistic_Vision_V4.0.safetensors [29a7afaa]" },
                { "name": "Realistic_Vision_V5.0.safetensors [614d1063]", "value": "Realistic_Vision_V5.0.safetensors [614d1063]" },
                { "name": "redshift_diffusion-V10.safetensors [1400e684]", "value": "redshift_diffusion-V10.safetensors [1400e684]" },
                { "name": "revAnimated_v122.safetensors [3f4fefd9]", "value": "revAnimated_v122.safetensors [3f4fefd9]" },
                // { "name": "rundiffusionFX25D_v10.safetensors [cd12b0ee]", "value": "rundiffusionFX25D_v10.safetensors [cd12b0ee]" },
                // { "name": "rundiffusionFX_v10.safetensors [cd4e694d]", "value": "rundiffusionFX_v10.safetensors [cd4e694d]" },
                // { "name": "sdv1_4.ckpt [7460a6fa]", "value": "sdv1_4.ckpt [7460a6fa]" },
                { "name": "shoninsBeautiful_v10.safetensors [25d8c546]", "value": "shoninsBeautiful_v10.safetensors [25d8c546]" },
                { "name": "theallys-mix-ii-churned.safetensors [5d9225a4]", "value": "theallys-mix-ii-churned.safetensors [5d9225a4]" },
                { "name": "timeless-1.0.ckpt [7c4971d4]", "value": "timeless-1.0.ckpt [7c4971d4]" },
                // { "name": "toonyou_beta6.safetensors [980f6b15]", "value": "toonyou_beta6.safetensors [980f6b15]" }
                )),

    async execute(interaction) {
        await interaction.deferReply(); 

        const prompt = interaction.options.getString('prompt');
        const selectedModel = interaction.options.getString('model');
        const negative_prompt = "blurry, bad quality, ((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), out of frame, extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck))), ((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), out of frame, extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck))) , ((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), out of frame, extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck))), split image, out of frame, amputee, mutated, mutation, deformed, severed, dismembered, corpse, photograph, poorly drawn, bad anatomy, blur, blurry, lowres, bad hands, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, artist name, ugly, symbol, hieroglyph,, extra fingers,  six fingers per hand, four fingers per hand, disfigured hand, monochrome, missing limb, disembodied limb, linked limb, connected limb, interconnected limb,  broken finger, broken hand, broken wrist, broken leg, split limbs, no thumb, missing hand, missing arms, missing legs, fused finger, fused digit, missing digit, bad digit, extra knee, extra elbow, storyboard, split arms, split hands, split fingers, twisted fingers"; 

        try {
            const imageResponse = await rsnchat.prodia(prompt, negative_prompt, selectedModel); 
            
            if (imageResponse.imageUrl) {
                const embed = new EmbedBuilder()
                    .setImage(imageResponse.imageUrl);

                await interaction.editReply({ embeds: [embed] });
            } else {
                await interaction.editReply({ content: 'Image generation failed. Please try again or check your API credentials.' });
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({ content: 'An error occurred during image generation. Please try again later.'});
        }
    }
};