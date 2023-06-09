import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ back }) {
  return (
    <header className="header">
      <div className="width">
        { back && (
          <Link to="/">
            <svg class="return__button"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path
                fill="#fff"
                d="M655-80 255-480l400-400 56 57-343 343 343 343-56 57Z"
              />
            </svg>
          </Link>
        )}
        <h1>
          <Link to="/">Web 3 price tracker</Link>
        </h1>
      </div>
    </header>
  );
}
