const {
    Client,
    GatewayIntentBits,
    Partials,
    Collection,
} = require('discord.js');

const { loadEvents } = require('./Handlers/eventHandler');
const { loadCommands } = require('./Handlers/commandHandler');
const { loadButtons } = require(`./Handlers/buttonHandler`);

const {
    Guilds, GuildMembers, GuildMessages, GuildBans, GuildMessageReactions
} = GatewayIntentBits;
const {
    User,
    Message,
    GuildMember,
    ThreadMember,
    Ban,
    Kick,
} = Partials;
const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages, GuildBans, GuildMessageReactions],
    partials: [User, Message, GuildMember, ThreadMember, Ban, Kick],
});

client.buttons = new Collection();
client.commands = new Collection();
client.config = require('./config.json')
client.tools = require(`./Util/Tools`);

client.login(client.config.TOKEN).then(() => {
    loadEvents(client);
    loadCommands(client);
    loadButtons(client);
})
.catch((err) => console.log(err));
