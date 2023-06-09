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

      <span className="home__Crypto__Prices">{coin.priceBTC} BTC</span>
      <span className="home__Crypto__Prices">{coin.priceUSD} USD</span>
    </div>
  );
}
