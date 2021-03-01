let ms = require('ms')
let guild = process.env.GUILD

module.exports = {
    name: 'ready',
    run: bot => {
        console.log(`Logged in as ${bot.user.tag}!`)
        setInterval(() => {
            let { memberCount } = bot.guilds.cache.get(guild)
            bot.user.setActivity(`${memberCount} Members`, { type: 'WATCHING' })
        }, ms('10s'))
    }
}