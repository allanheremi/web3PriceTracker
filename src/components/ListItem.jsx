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
      {coin.priceBTC &&
      <span className="home__Crypto__Prices">
      <span class="home__Crypto__Btc">
        <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"/>
        {coin.priceBTC} BTC</span>
      <span class="home__Crypto__Usd">({coin.priceUSD} USD)</span>
      </span> }
    </div>
  );
}
