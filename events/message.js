let ms = require('ms')
let channels = require('@settings/channels')

let prefix = process.env.PREFIX
let startBumpTimeout = bot => {
    global.bumpTimeout = setTimeout(() => {
        let channel = bot.channels.cache.get(channels.bots)
        channel.send(`<@&819899948559630348> Time to bump! \`!d bump\``)
    }, ms('2h'))
}

module.exports = {
    name: 'message',
    run: (bot, message) => {
        if (message.author.bot) return
        if (message.content === '!d bump') {
            if (!bot.production) return
            clearTimeout(global.bumpTimeout)
            startBumpTimeout(bot)
        }
        if (!message.content.startsWith(prefix)) return
        let args = message.content.slice(prefix.length).split(/ +/)
        let commandName = args.shift().toLowerCase()
        let command = bot.commands.get(commandName)
        if (!command) return
        try {
            command.run({ bot, message, args })
            console.log(`${message.author.tag} ran command: ${commandName}`)
        } catch (error) {
            message.channel.send(`An error occured!`)
            console.error(error)
        }
    }
}