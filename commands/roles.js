let roles = require('../roles.json')
let { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'roles',
    run: ({ bot, message }) => {
        let description = ''
        for (let [emojiName, role] of Object.entries(roles.emojis)) {
            let emoji = bot.emojis.cache
                .find(emoji => emoji.name === emojiName)
            description += `${emoji ?? `:${emojiName}:`} **${emojiName}**: ${role || 'N/A'}\n`
        }
        let embed = new MessageEmbed()
            .setColor(0x2F3136)
            .setDescription(description)
        message.channel.send(embed)
    }
}