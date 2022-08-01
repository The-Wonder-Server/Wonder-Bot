let ms = require('ms')

module.exports = {
    name: 'ready',
    run: async bot => {
        console.log(`Logged in as ${bot.user.tag}!`)
        if (!bot.production) return
        bot.invites = await bot.guild.fetchInvites()
    }
}