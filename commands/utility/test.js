const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('just a test!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')),
    async execute(interaction) {
        const t = interaction.options.getString('input');
        await interaction.reply(t);
    },
};