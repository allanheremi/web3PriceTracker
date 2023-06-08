import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import showStore from '../stores/showStore';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Show() {
  const store = showStore();
  const params = useParams();

  React.useEffect(() => {
    store.fetchData(params.id);
  }, []);

  if (!store.dataRes.name) {
    // Data is not available yet, display a loading state or placeholder
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header back/>
      <header>
        <img src={store.dataRes.image.large}/>
        <h2>{store.dataRes.name} ({(store.dataRes.symbol)})</h2>
      </header>
      <AreaChart
        width={500}
        height={400}
        data={store.graphData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      <div>
        <h4>Market cap rank</h4>
        <span>#{store.dataRes.market_cap_rank}</span>
      </div>
      <div>
        <h4>24h high</h4>
        <span>${store.dataRes.market_data.high_24h.usd}</span>
      </div>
      <h4>24h low</h4>
      <span>${store.dataRes.market_data.low_24h.usd}</span>
      <div>
        <h4>Circulating supply</h4>
        <span>{store.dataRes.market_data.circulating_supply.toFixed(0)}</span>
      </div>
      <div>
        <h4>Current price</h4>
        <span>${store.dataRes.market_data.current_price.usd}</span>
      </div>
      <div>
        <h4>1 year price change</h4>
        <span>{store.dataRes.market_data.price_change_percentage_1y.toFixed(3)}%</span>
      </div>
      <h4>1 Month price change</h4>
      <span>{store.dataRes.market_data.price_change_percentage_30d.toFixed(3)}%</span>
    </div>
  );
}
