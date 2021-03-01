require('dotenv').config()

let fs = require('fs')
let discord = require('discord.js')

let bot = new discord.Client({
    ws: {
        intents: discord.Intents.ALL
    } 
})

bot.commands = new discord.Collection()

fs.readdirSync('commands').forEach(file => {
    let command = require(`./commands/${file}`)
    bot.commands.set(command.name, command)
})

fs.readdirSync('events').forEach(file => {
    let event = require(`./events/${file}`)
    bot.on(event.name, event.run.bind(null, bot))
})

bot.login(process.env.TOKEN)

process.on('unhandledRejection', console.error)
process.on('uncaughtException', console.error)