import React, { useRef, useEffect } from 'react';
import homeStore from '../stores/homeStores';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ListItem from '../components/ListItem';

export default function Home() {
  const store = homeStore();
  const searchRef = useRef(null);

  React.useEffect(() => {
    store.fetchCoins();
  }, []);

  useEffect(() => {
    const letters = 'abcdefghijklkmnopqrstuvwxyz';
    let interval = null;
    const searchElement = searchRef.current;

    const randomize = () => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        searchElement.innerText = searchElement.innerText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return searchElement.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join('');

        if (iteration >= searchElement.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 1.75;
      }, 30);
    };

    randomize();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="width">
        <header className="home-search">
          <h2 ref={searchRef} data-value="Search for a coin">
            Search for a coin
          </h2>
          <input type="text" value={store.query} onChange={store.setQuery} />
        </header>
      </div>
      <div className="home__Cryptos">
        <div className="width">
          <h2>Trending coins</h2>
          <div className="home__Cryptos__List">
            {store.coins.map((coin) => {
              return (
                <Link key={coin.id} to={`/${coin.id}`}>
                  <ListItem coin={coin} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
