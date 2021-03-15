let roles = require('@settings/roles')
let channels = require('@settings/channels')
let { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'roles',
    run: ({ bot, message }) => {
        let description = ''
        for (let [emojiName, roleID] of Object.entries(roles)) {
            let emoji = bot.emojis.cache
                .find(emoji => emoji.name === emojiName)
            let role = bot.guild.roles.cache.get(roleID)
            description += `${emoji ?? `:${emojiName}:`} \`:${emojiName}:\` ${role.name || 'N/A'}\n`
        }
        let embed = new MessageEmbed()
            .setColor(0x2F3136)
            .setDescription(description)
            .addField('Role Channel', `<#${channels.roles}>`)
        message.channel.send(embed)
    }
}