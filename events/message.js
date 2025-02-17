let ms = require('ms')
let channels = require('@settings/channels')

let prefix = process.env.PREFIX

module.exports = {
    name: 'message',
    run: (bot, message) => {
        if (message.author.bot) return
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