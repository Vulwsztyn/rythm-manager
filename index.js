const { Bot } = require('./bot')
const { Scheduler } = require('./scheduler')
require('dotenv').config()
const send = require('@polka/send-type')
const { json, urlencoded } = require('body-parser')
const { TOKEN, VOICE_CHANNEL_ID, MSG_CHANNEL_ID, PORT } = process.env
const polka = require('polka')
const cors = require('cors')

async function main() {
  const bot = new Bot(TOKEN, VOICE_CHANNEL_ID, MSG_CHANNEL_ID)
  const scheduler = new Scheduler()
  await bot.init()
  polka()
    .use(cors())
    .use(urlencoded({ extended: false }))
    .use(json())
    .get('/', (req, res) => {
      res.end(`Hello world`)
    })
    .post('/', async (req, res) => {
      console.log(req.body.msg)
      if (req.body.msg) await scheduler.add(() => bot.send(req.body.msg))
      return send(res, 200, { success: true })
    })
    .listen(PORT || 3000, (err) => {
      if (err) throw err
      console.log(`> Running on localhost:3000`)
    })
}
main()
