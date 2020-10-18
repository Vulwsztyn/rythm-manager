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
    this.bot.on('ready', () => {
      console.info(`Logged in as ${this.bot.user.tag}!`)
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
