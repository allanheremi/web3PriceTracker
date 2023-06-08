import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (

<header className="header">
    <div className="width">
        <h1>
            <Link to="/">Web 3 price tracker</Link>
        </h1>
    </div>
</header>
  );
}
