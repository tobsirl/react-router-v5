import React from 'react';

export const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => (
      <span role="img" aria-label="Home">
        🏠🏠🏠🏠🏠
      </span>
    ),
    main: () => (
      <span role="img" aria-label="Home">
        🏠🏠🏠🏠🏠
      </span>
    ),
  },
  {
    path: '/rainbows',
    sidebar: () => (
      <span role="img" aria-label="Home">
        🌈🌈🌈🌈🌈
      </span>
    ),
    main: () => (
      <span role="img" aria-label="Home">
        🌈🌈🌈🌈🌈
      </span>
    ),
  },
  {
    path: '/bears',
    sidebar: () => (
      <span role="img" aria-label="Home">
        🐻🐻🐻🐻🐻
      </span>
    ),
    main: () => (
      <span role="img" aria-label="Home">
        🐻🐻🐻🐻🐻
      </span>
    ),
  },
];
