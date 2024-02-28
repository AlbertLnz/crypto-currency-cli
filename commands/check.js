import { KeyManager } from "../lib/KeyManager.js"
import { CryptoAPI } from "../lib/CryptoAPI.js"

export const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager()
      const key = keyManager.getKey()
      
      const api = new CryptoAPI(key)
      const priceData = await api.getPriceData(cmd.coin, cmd.cur)

      console.log(priceData)

    } catch (error) {
      console.error(error.message.bold.red)
    }
  }
}