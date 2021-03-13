let { CronJob } = require('cron')
let { guild, channels } = require('../config.json')

module.exports = {
    name: 'ready',
    run: bot => {
        console.log(`Logged in as ${bot.user.tag}!`)
        new CronJob('* * * * *', () => {
            let { memberCount } = bot.guilds.cache.get(guild)
            bot.user.setActivity(`${memberCount} Members`, { type: 'WATCHING' })
        }).start()
        new CronJob('0 */2 * * *', () => {
            let channel = bot.channels.cache.get(channels.bots)
            channel.send(`<@&819899948559630348> Time to bump! \`!d bump\``)
        }).start()
    }
}