import React from 'react';
import Home from '../components/Home';
import Rainbows from '../components/Rainbows';
import Bears from '../components/Bears';

export const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => (
      <span role="img" aria-label="Home">
        🏠🏠🏠🏠🏠
      </span>
    ),
    main: () => <Home />,
  },
  {
    path: '/rainbows',
    sidebar: () => (
      <span role="img" aria-label="Home">
        🌈🌈🌈🌈🌈
      </span>
    ),
    main: () => <Rainbows />,
  },
  {
    path: '/bears',
    sidebar: () => (
      <span role="img" aria-label="Home">
        🐻🐻🐻🐻🐻
      </span>
    ),
    main: () => <Bears />,
  },
];
