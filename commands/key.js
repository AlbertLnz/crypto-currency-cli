import { KeyManager } from "../lib/KeyManager.js"
import inquirer from "inquirer"
import colors from 'colors'
import { isRequired } from "../utils/validation.js"

export const key = {

  async set() {
    const keyManager = new KeyManager()
    const input = await inquirer.prompt([
      { type: 'input', name: 'key', message: colors.cyan('Enter an CoinMarket API Key: '), validate: isRequired }
    ])
    const keySet = keyManager.setKey(input.key)

    if(keySet) {
      console.log(colors.blue.bold('API Ket Set!'))
    }

  },

  show() {
    try {
      const keyManager = new KeyManager()
      const key = keyManager.getKey()
      console.log('Current API Key:', key.bold.yellow)

    } catch (error) {
      console.log(error.message.bold.red)
    }
  },

  remove() {
    try {
      const keyManager = new KeyManager()
      keyManager.deleteKey()
      console.log('The CoinMarket API Key has been removed!'.bold.magenta)

    } catch (error) {
      console.log(error.message.bold.red)
    }
  },

}