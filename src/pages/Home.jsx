import React from 'react';
import homeStore from '../stores/homeStores';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ListItem from '../components/ListItem';

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
          <input type="text" value={store.query} onChange={store.setQuery} />
        </header>
      </div>
      <div className="home__Cryptos">
        <div className="width">
          <h2>Trending coins</h2>
          {store.coins.map(coin => {
            return <ListItem key={coin.id} coin={coin} />;
          })}
        </div>
      </div>
    </div>
  );
}
