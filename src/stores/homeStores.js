import { create } from 'zustand';
import axios from 'axios';
import debounce from '../helpers/debounce';

const homeStore = create(set => ({
  coins: [],
  trending: [],
  query: '',

  setQuery: event => {
    set({ query: event.target.value });
    homeStore.getState().searchCoins();
  },

  searchCoins: debounce(async () => {
    const { query, trending } = homeStore.getState();
    if (query.length > 2) {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );
   
    const coins = res.data.coins.map(coin => {
      return {
        name: coin.name,
        image: coin.large,
        id: coin.id,
      };
    });
    set({ coins });
  } else {
    set({ coins: trending })
  }
  }, 750),

  fetchCoins: async () => {
    const btcRes = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    

    const res = await axios.get(
      'https://api.coingecko.com/api/v3/search/trending'
    );

    const btcPrice = btcRes.data.bitcoin.usd;
    console.log(btcPrice)

    const coins = res.data.coins.map(coin => {
      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceBTC: coin.item.price_btc.toFixed(10),
        priceUSD: (coin.item.price_btc * btcPrice).toFixed(6)
      };
    });
    set({ coins, trending: coins });
  },
}));

export default homeStore;
