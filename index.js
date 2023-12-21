const { Client, MessageEmbed } = require('discord.js-selfbot-v13');
const Discord = require("discord.js");

const selfbotClient = new Client({});
const normalClient = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"], partials: ["CHANNEL"] });

let alertChannel;

selfbotClient.on('ready', () => {
    console.log(`${selfbotClient.user.username} is ready!`);
});

normalClient.on('ready', () => {
    console.log(`${normalClient.user.username} is ready!`);
    alertChannel = normalClient.channels.cache.get("YOUR_CHANNEL_ID_HERE");
});

selfbotClient.on('messageCreate', async (message) => {
    if (message.channel.type !== "DM" || message.author.id !== "642873385931767831") return;

    const embed = message.embeds[0]?.toJSON();
    if (!embed) return;

    const raidEmbed = new MessageEmbed(embed);
    alertChannel.send({ content: "@everyone", embeds: [raidEmbed] });
});

selfbotClient.login("YOUR_SELF_BOT_TOKEN_HERE");
normalClient.login("YOUR_NORMAL_BOT_TOKEN_HERE");
