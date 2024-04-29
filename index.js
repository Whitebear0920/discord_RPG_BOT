const { Client, IntentsBitField } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { token, clientId, guildId } = require('./config.json');
const { REST, Routes } = require('discord.js');
const rest = new REST().setToken(token);
const commands = require('./commands.json');


(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

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
    client.guilds.cache.forEach(guild => {
        console.log(guild.id);
    });
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    }
    if (commandName === 'hi') {
        await interaction.reply('hello');
    }
});

client.on('messageCreate', (msg) => {
    console.log(msg);
    if (msg.content === 'p') {
        msg.reply('pp');
    }
})

client.login(token);