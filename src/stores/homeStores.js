import { create } from 'zustand';
import axios from 'axios';
import debounce from '../helpers/debounce';

const homeStore = create(set => ({
  coins: [],
  query: '',

  setQuery: event => {
    set({ query: event.target.value });
    homeStore.getState().searchCoins();
  },

  searchCoins: debounce(async () => {
    const { query } = homeStore.getState();
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${query}`
    );

    const coins = res.data.coins.map(coin => {
      return { 
        name: coin.name, image: coin.large, id: coin.id 
      }
    });
    set({coins})
  }, 750),

  fetchCoins: async () => {
    const res = await axios.get(
      'https://api.coingecko.com/api/v3/search/trending'
    );

    const coins = res.data.coins.map(coin => {
      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceBTC: coin.item.price_btc,
      };
    });
    set({ coins });
  },
}));

export default homeStore;
