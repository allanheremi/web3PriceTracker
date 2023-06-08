import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="width">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 56"
            width="26"
          >
            <path 
            fill="currentColor" d="M359-242 120-481l239-239 43 43-166 166h604v60H236l166 166-43 43Z" />
          </svg>
        </a>
        <h1>
          <Link to="/">Web 3 price tracker</Link>
        </h1>
      </div>
    </header>
  );
}
