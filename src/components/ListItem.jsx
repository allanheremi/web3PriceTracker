import React from 'react';
import { Link } from 'react-router-dom';

export default function ListItem({ coin }) {
  return (
    <div className="home__Crypto">
      <Link to={`/${coin.id}`}></Link>
      <span className="home__Crypto__Image">
        <img src={coin.image} />
      </span>

      <span className="home__Crypto__Name">{coin.name}</span>
      <span className="home__Crypto__Prices">
      <span class="home__Crypto__Btc">{coin.priceBTC} BTC</span>
      <span class="home__Crypto__Usd">({coin.priceUSD} USD)</span>
      </span>
    </div>
  );
}
