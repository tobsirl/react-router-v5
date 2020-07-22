import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Players</Link>
          </li>
          <li>
            <Link>Teams</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
