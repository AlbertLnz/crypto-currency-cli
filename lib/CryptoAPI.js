import axios from "axios";
import colors from 'colors'
import { handleAPIError } from "../utils/handleAPIError.js";

export class CryptoAPI {

  constructor(apiKey) {
    this.apiKey = apiKey
    this.baseURL = 'https://pro-api.coinmarketcap.com/v2'
  }

  async getPriceData(coins, currency) { // (cmd.coin, cmd.cur)
    try {
      const res = await axios.get(`${this.baseURL}/cryptocurrency/quotes/latest?symbol=${coins}&convert=${currency}`, {
        headers:{
          'Accept': 'application/json',
          'X-CMC_PRO_API_KEY': this.apiKey
        }
      })

      const json = res.data.data
      let output = '';
      for (const coinSymbol in json) {
        const coinData = json[coinSymbol][0]; // First array element of coinSymbol (every crypto has 1 object)
        output +=  `${'Coin:'.yellow} ${coinData.symbol} (${coinData.name}) | ${'Price:'.green} ${coinData.quote[currency]['price'].toFixed(2)} ${currency} | ${'Rank:'.blue} ${coinData.cmc_rank}\n`;
      }
      
      return output

    } catch (error) {
      handleAPIError(error)
    }
  }

}