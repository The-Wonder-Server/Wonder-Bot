let ms = require('ms')
let { guild, channels } = require('../config.json')

module.exports = {
    name: 'ready',
    run: bot => {
        console.log(`Logged in as ${bot.user.tag}!`)
        setInterval(() => {
            let { memberCount } = bot.guilds.cache.get(guild)
            bot.user.setActivity(`${memberCount} Members`, { type: 'WATCHING' })
        }, ms('1m'))
    }
}