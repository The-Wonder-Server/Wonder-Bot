let roles = require('@settings/roles')
let channels = require('@settings/channels')
let gemoji = require('gemoji/emoji-to-name')

module.exports = {
    name: 'messageReactionAdd',
    run: async (bot, reaction, user) => {
        if (!bot.production) return
        if (reaction.partial) {
            await reaction.fetch().catch(console.error)
        }
        if (reaction.message.channel.id !== channels.roles) return
        let emojiName = !reaction.emoji.id ?
            gemoji[reaction.emoji.name] : reaction.emoji.name
        if (!emojiName) return
        let roleID = roles[emojiName]
        if (!roleID) return
        let role = bot.guild.roles.cache.get(roleID)
        bot.guild.members.cache.get(user.id)
            .roles.add(role)
            .catch(console.error)
        console.log(`${user.tag} added role: ${role.name}`)
    }
}