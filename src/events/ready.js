const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready!');
        
        const statusArray = [
            {
                content: 'Misaka Network',
                type: ActivityType.Listening,
                status: 'online',
            },
        ];
        const option = Math.floor(Math.random() * statusArray.length);

        try {
            console.log('Presence Set');
            await client.user.setPresence({
                status: statusArray[option].status,
                activities: [
                    {
                        name: statusArray[option].content,
                        type: statusArray[option].type,
                    },
                ],
            })
        } catch (error) {
            console.error(error);
        }

    },
};