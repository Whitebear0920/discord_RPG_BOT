const { Client, Intents, IntentsBitField } = require('discord.js');
const { token } = require('./token.json');
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (msg) => {
    console.log(msg);
    if (msg.content === 'p') {
        msg.reply('pp');
    }
})

client.login(token);