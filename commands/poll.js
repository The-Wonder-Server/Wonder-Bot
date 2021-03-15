let channels = require('@settings/channels')
let { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'poll',
    run: ({ bot, args, message }) => {
        let question = args.join(' ')
        if (!question) return message.channel.send('Supply message!')
        let embed = new MessageEmbed()
            .setColor(0x2F3136)
            .setTitle('POLL')
            .setDescription(question)
            .setFooter(`Submitted by ${message.author.tag}`, message.author.avatarURL())
        bot.channels.cache.get(channels.polls)
            .send(embed)
            .then(async poll => {
                await poll.react('🟢')
                await poll.react('🟡')
                await poll.react('🔴')
            })
    }
}