import React from 'react';
import homeStore from '../stores/homeStores';
import { Link } from 'react-router-dom'
import Header from '../components/Header';

export default function Home() {
  const store = homeStore();

  React.useEffect(() => {
    store.fetchCoins();
  }, []);
  return (
    <div>
    <Header />
    <div className="width">
    <header className="home-search">
      <h2>Search for a coin</h2>
      <input type="text" value={store.query} onChange={store.setQuery}/>
    </header>
    </div>
       
      {store.coins.map(coin => {
        return (
          <div key={coin.id}>
            <Link to={`/${coin.id}`}>
                {coin.name}
                </Link>
          </div>
        );
      })}
    </div>
  );
}
