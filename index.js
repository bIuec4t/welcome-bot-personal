require('dotenv').config();

const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.cache.get('1117901315574595629');

    if (!channel) return;

    const embed = new EmbedBuilder()
        .setColor('#66c7ff')
        .setDescription(
`welc ${member} ⛱𓂃 𓈒𓏸‪‪

enjoy your stay islander ∘˙○˚.•

ළ⋆˚𓆝 𓆟˚𓆞𓆝 read <#1274609137497411594> + get <#1513316010323742850>`
        )
        .setImage('https://i.imgur.com/pPCQnXM.gif')
        .setFooter({
            text: `there are now ${member.guild.memberCount} members 𖦹`
        });

    channel.send({ embeds: [embed] });
});

client.login(process.env.TOKEN);