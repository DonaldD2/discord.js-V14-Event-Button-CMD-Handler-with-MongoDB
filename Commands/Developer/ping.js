const {
    SlashCommandBuilder,
    messageEmbed,
    CommandInteraction,
} = require('discord.js')


module.exports = {
    developer: true,
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('check to see if bot is online'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({
        content: 'The bot is online and healthy!',
        ephemeral: true
    })
    }
}