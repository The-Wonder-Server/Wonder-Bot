const message = require("../events/message")

module.exports = {
    name: 'ping',
    run: ({ bot, message }) => {
        message.channel.send(`Pong! \`${bot.ws.ping}ms\``)
    }
}