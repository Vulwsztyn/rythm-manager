const { Mutex } = require('async-mutex')
const waitingTime = 3
class Scheduler {
  constructor() {
    this.lastSent = new Date()
    this.stack = []
    this.mutex = new Mutex()
  }

  async add(fn) {
    await this.mutex.runExclusive(async () => {
      this.stack = [...this.stack, fn]
    })
    await this.do()
  }

  async do() {
    await this.mutex.runExclusive(async () => {
      if (this.stack.length < 1) return
      if (new Date() - this.lastSent >= waitingTime * 1000) {
        const [first, ...rest] = this.stack
        this.stack = rest
        await first()
        this.lastSent = new Date()
      } else {
        setTimeout(() => this.do(), new Date() - this.lastSent) // has to be arrow function because of this
      }
    })
  }
}
module.exports = {
  Scheduler,
}
