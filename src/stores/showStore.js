import { create } from 'zustand';
import axios from 'axios';
import debounce from '../helpers/debounce';
import Show from '../pages/Show';

const showStore = create(set => ({
  graphData: [],

  fetchData: async id => {
    const [graphRes, dataRes] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1225`
      ),
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`)
    ])

 
    // https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&market_data=true URL for price id

    const graphData = graphRes.data.prices.map(price => {
      const [timestamp, p] = price;
      const date = new Date(timestamp).toLocaleDateString('en-us')

      return {
        Date: date,
        Price: p,
      };
    });
    set({graphData: graphData})
    console.log(dataRes)
  },
}));

export default showStore;
