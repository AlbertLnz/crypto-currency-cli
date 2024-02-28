export const handleAPIError = (error) => {
  
  if(error.response.status === 401) {
    throw new Error('Your CoinMarket API Key is invalid - Go to https://coinmarketcap.com/api')
  } 
  else if (error.response.status === 404) {
    throw new Error('Your CoinMarket API Key is not responding')
  }
  else {
    throw new Error('Something is not working')
  }

}