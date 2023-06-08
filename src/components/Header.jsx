import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="width">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path
              fill="currentcolor"
              d="M655-80 255-480l400-400 56 57-343 343 343 343-56 57Z"
            />
          </svg>
        </a>
        <h1>
          <Link to="/">Web 3 price tracker</Link>
        </h1>
      </div>
    </header>
  );
}
