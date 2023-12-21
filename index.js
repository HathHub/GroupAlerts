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
    alertChannel = normalClient.channels.cache.get("1149079868466806794");
});

selfbotClient.on('messageCreate', async (message) => {
    if (message.channel.type !== "DM" || message.author.id !== "642873385931767831") return;

    const embed = message.embeds[0]?.toJSON();
    if (!embed) return;

    const raidEmbed = new MessageEmbed(embed);
    alertChannel.send({ content: "@everyone", embeds: [raidEmbed] });
});

selfbotClient.login("MTE4MDA3MDMwNjk5MjM3MzgxMA.GDeCue.0a3tjqvxNk__mh85-uHindHcWd_1CcKxV6E44k");
normalClient.login("MTE4NTc1NDA1NDE1NzE0NDEyNA.GsgGcr.35L03-vyxjiP10DEsTaM6Ytk3Tz8QYlgn6WBP8");
