let roles = require('../roles.json')
let gemoji = require('gemoji/emoji-to-name')

module.exports = {
    name: 'messageReactionAdd',
    run: async (bot, reaction, user) => {
        // if (reaction.partial) {
        //     await reaction.fetch().catch(console.error)
        // }
        // if (reaction.message.channel.id !== roles.channel) return
        // let guild = reaction.message.guild
        // let member = guild.members.cache.get(user.id)
        // let channel = reaction.message.channel
        // if (!reaction.emoji.id) {
        //     channel.send(`${gemoji[reaction.emoji.name]}`)
        // } else {
        //     channel.send(reaction.emoji.name)
        // }
        // let roleName = roles.emojis[reaction.emoji.name]
        // if (!roleName) return
        // let role = guild.roles.cache.find(role => {
        //     role.name === roleName
        // })
        // member.roles.add(role)
    }
}