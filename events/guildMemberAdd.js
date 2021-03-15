let channels = require('@settings/channels')
let { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'guildMemberAdd',
    run: async (bot, member) => {
        if (!bot.production) return
        let oldInvites = bot.invites
        bot.invites = await bot.guild.fetchInvites()
        let invite = bot.invites.find(invite => {
            return oldInvites.get(invite.code).uses < invite.uses
        })
        let embed = new MessageEmbed()
            .setColor(0x2F3136)
            .setThumbnail(member.user.avatarURL())
            .setTitle(`👋 Welcome to **${bot.guild.name}**`)
            .setDescription('Please introduce yourself in this channel!')
            .setFooter(`Invited by: ${invite.inviter.tag}`, invite.inviter.avatarURL())
        bot.channels.cache.get(channels.intro)
            .send({ content: member.user, embed })
            .catch(console.error)
    }
}