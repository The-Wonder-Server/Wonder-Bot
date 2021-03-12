let ms = require('ms')
let { guild, channels } = require('../config.json')

module.exports = {
    name: 'ready',
    run: bot => {
        console.log(`Logged in as ${bot.user.tag}!`)
        setInterval(() => {
            let { memberCount } = bot.guilds.cache.get(guild)
            bot.user.setActivity(`${memberCount} Members`, { type: 'WATCHING' })
        }, ms('10s'))
        setInterval(() => {
            let channel = bot.channels.cache.get(channels.bots)
            channel.send(`<@801667138673967104> Time to bump! \`!d bump\``)
        },  ms('2h'))
    }
}