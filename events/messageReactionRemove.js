let roles = require('../roles.json')
let gemoji = require('gemoji/emoji-to-name')

module.exports = {
    name: 'messageReactionRemove',
    run: async (bot, reaction, user) => {
        if (reaction.partial) {
            await reaction.fetch().catch(console.error)
        }
        if (reaction.message.channel.id !== roles.channel) return
        let guild = reaction.message.guild
        let member = guild.members.cache.get(user.id)
        let emojiName = !reaction.emoji.id ?
            gemoji[reaction.emoji.name] : reaction.emoji.name
        if (!emojiName) return
        let roleName = roles.emojis[emojiName]
        if (!roleName) return
        let role = guild.roles.cache
            .find(role => role.name === roleName)
        member.roles.remove(role).catch(console.error)
        console.log(`${user.tag} removed role: ${roleName}`)
    }
}