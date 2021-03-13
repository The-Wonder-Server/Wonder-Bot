let roles = require('../roles.json')
let { channels } = require('../config.json')
let gemoji = require('gemoji/emoji-to-name')

module.exports = {
    name: 'messageReactionRemove',
    run: async (bot, reaction, user) => {
        if (reaction.partial) {
            await reaction.fetch().catch(console.error)
        }
        if (reaction.message.channel.id !== channels.roles) return
        let guild = reaction.message.guild
        let member = guild.members.cache.get(user.id)
        let emojiName = !reaction.emoji.id ?
            gemoji[reaction.emoji.name] : reaction.emoji.name
        if (!emojiName) return
        let roleID = roles[emojiName]
        if (!roleID) return
        let role = guild.roles.cache.get(roleID)
        member.roles.remove(role).catch(console.error)
        console.log(`${user.tag} removed role: ${role.name}`)
    }
}