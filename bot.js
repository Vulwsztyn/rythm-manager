// require("dotenv").config();
const Discord = require('discord.js')

// const TOKEN = process.env.TOKEN;
class Bot {
  constructor(TOKEN, VOICE_CHANNEL_ID, MSG_CHANNEL_ID) {
    this.TOKEN = TOKEN
    this.voiceChannelId = VOICE_CHANNEL_ID
    this.msgChannelId = MSG_CHANNEL_ID
  }
  async init() {
    this.bot = new Discord.Client()
    await this.bot.login(this.TOKEN)
    this.bot.on('ready', async () => {
      console.info(`Logged in as ${this.bot.user.tag}!`)
    })
    this.bot.on('message', async (message) => {
      if (message.content.includes('Loading')) {
        // console.log(message.content)
        // console.log(Object.keys(message))

        setTimeout(async () => {
          // const channel = await this.bot.channels.get(this.msgChannelId)
          // const msg = await channel.messages.fetch(message.id)
          // console.log(msg.content)
          message.react('📥')
        }, 3000)
      }
      [
        [/^!\s?p\s/, '!play '],
        [/^!\s?rm?\s/, '!remove '],
        [/^!\s?pt\s/, '!playnext '],
        [/^!\s?pn\s/, '!playnext '],
        [/^!\s?fs\s?$/, '!forceskip '],
        [/^!\s?q\s?$/, '!queue'],
      ].forEach(async ([regex, command]) => {
        if (message.content.match(regex)) {
          await this.send(message.content.replace(regex, command))
        }
      })
      if (message.content.match(/^!\s?ps\s/)) {
        await this.send(message.content.replace(/^!\s?ps\s/, '!playnext '))
        await this.send('!forceskip')
      }
    })
  }
  async send(text) {
    const voiceChannel = this.bot.channels.get(this.voiceChannelId)

    await voiceChannel.join()

    await this.bot.channels.get(this.msgChannelId).send(text)
    // msgChannel.createMessage(text);
    // await voiceChannel.leave()
  }
}
module.exports = {
  Bot,
}
// bot.on('ready', () => {
//   console.info(`Logged in as ${bot.user.tag}!`);
// });

// bot.on('message', msg => {
//   if (msg.content === 'ping') {
//     msg.reply('pong');
//     msg.channel.send('pong');
//     const channel = msg.member.voiceChannel;

//     channel.join()
//     .then(connection => console.log('Connected!'))
//     .catch(console.error);

//   } else if (msg.content.startsWith('!kick')) {
//     if (msg.mentions.users.size) {
//       const taggedUser = msg.mentions.users.first();
//       msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
//     } else {
//       msg.reply('Please tag a valid user!');
//     }
//   }
// });
