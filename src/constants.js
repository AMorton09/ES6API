import chalk from 'chalk'
import { resolve } from 'path'

// API port number specified in the `package.json` start script.
const apiPort = process.env.API_PORT_NUMBER || 8081

const dir = {
  build: resolve(process.cwd(), 'dist'),
  current: process.cwd()
}

// Construct the message and greeting.
const location = chalk.blue('http://localhost:') + chalk.white(apiPort)
const exServer = chalk.red('API ExpressJS server')
const message = ` 👂  The ${exServer} is listening at: ${location} 👂`
const repeatAmt = message.length - 30
const lines = `-`.repeat(repeatAmt)
const emojis = ` 👨🏻‍💻 `.repeat(repeatAmt / 3)
const greeting = `\n${lines}\n${message}\n${lines}\n${emojis}\n`

export { apiPort, dir, greeting }
