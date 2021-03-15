module.exports = {
    name: 'github',
    run: ({ bot, message }) => {
        message.channel.send(bot.github)
    }
}