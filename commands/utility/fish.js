const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('釣魚')
        .setDescription('就是釣魚!'),
    async execute(interaction) {
        const x = Math.floor(Math.random() * 100) + 1;
        if(x<=50){
            interaction.reply('糟糕，是垃圾!');
        }
        else if(x>50 && x<=75){
            interaction.reply('喔哇!是鮭魚!');
        }
        else if(x<=100 && x>75){
            interaction.reply('喔哇!是鮪魚')
        }
    },
};