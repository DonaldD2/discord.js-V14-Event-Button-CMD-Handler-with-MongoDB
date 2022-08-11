const {Client} = require('discord.js');
const mongoose = require('mongoose')
const DB = require('../../config.json');

module.exports = {
    name: 'ready',
    once: true,
    /**
     * 
     * @param {Client} client 
     */
    execute (client) {
        console.log(`Client logged in as ${client.user.username}`);
        client.user.setActivity(`in the ${client.guilds.cache.size} Guild(s) im in!`);

    }
}