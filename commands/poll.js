let { channels } = require('../config.json')
let { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'poll',
    run: ({ bot, args, message }) => {
        if (!args) return message.channel.send('Supply message!')
        let { author } = message
        let embed = new MessageEmbed()
            .setColor(0x2F3136)
            .setTitle('POLL')
            .setDescription(args.join(' '))
            .setFooter(`Submitted by ${author.tag}`, author.avatarURL())
        let channel = bot.channels.cache.get(channels.polls)
        channel.send(embed)
            .then(async poll => {
                await poll.react('🟢')
                await poll.react('🟡')
                await poll.react('🔴')
            })
    }
}