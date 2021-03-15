let ms = require('ms')

module.exports = {
    name: 'ready',
    run: async bot => {
        console.log(`Logged in as ${bot.user.tag}!`)
        bot.guild = bot.guilds.cache.get(process.env.GUILD)
        setInterval(() => {
            let { memberCount } = bot.guild
            bot.user.setActivity(`${memberCount} Members`, { type: 'WATCHING' })
        }, ms('1m'))
        if (!bot.production) return
        bot.invites = await bot.guild.fetchInvites()
    }
}