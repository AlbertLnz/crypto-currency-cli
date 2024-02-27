import { KeyManager } from "../lib/KeyManager.js"
import inquirer from "inquirer"
import colors from 'colors'

export const key = {

  async set() {
    const keyManager = new KeyManager()
    const input = await inquirer.prompt([
      { type: 'input', name: 'key', message: colors.cyan('Enter an CoinMarket API Key: ') }
    ])
    const keySet = keyManager.setKey(input.key)

    if(keySet) {
      console.log(colors.blue.bold('API Ket Set!'))
    }

  },

  show() {
    console.log('Hello from show()')
  },

  remove() {
    console.log('Hello from remove()')
  },

}