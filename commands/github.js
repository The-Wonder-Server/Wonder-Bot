let { github } = require('../config.json')

module.exports = {
    name: 'github',
    run: ({ message }) => {
        message.channel.send(github)
    }
}