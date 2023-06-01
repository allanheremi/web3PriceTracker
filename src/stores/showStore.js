import { create } from 'zustand';
import axios from 'axios';

const showStore = create(set => ({
  graphData: [],

  fetchData: async id => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`
    );

    const graphData = res.data.prices.map(price => {
      const [timestamp, p] = price;
      const date = new Date(timestamp).toLocaleDateString('en-us')

      return {
        Date: date,
        Price: p,
      };
    });
    set({graphData: graphData})
  },
}));

export default showStore;
