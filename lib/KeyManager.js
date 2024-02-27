import Configstore from "configstore";

export class KeyManager {

  constructor() {
    this.conf = new Configstore('crypto-currency-cli')
  }

  getKey() {
    const key = this.conf.get('apiKey')
    
    if(!key) {
      throw new Error('No API Key found - Get a API Key at https://coinmarketcap.com/api/')
    }
    
    return key
  }

  setKey(key) {
    this.conf.set('apiKey', key)
    return key
  }

  deleteKey() {
    const key = this.conf.get('apiKey')
    
    if(!key) {
      throw new Error('No API Key found - Get a API Key at https://coinmarketcap.com/api/')
    }
    
    this.conf.delete('apiKey')
    
    return
  }

}