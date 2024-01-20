// import React from 'react';

import restaurants from './constants/mocks';
import ReactDOM from 'react-dom/client';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <div>
    <h2>{restaurants[0].name}</h2>
    <h3>Меню:</h3>
    <ul>
      <li>{restaurants[0].menu[0].name}</li>
      <li>{restaurants[0].menu[1].name}</li>
      <li>{restaurants[0].menu[2].name}</li>
    </ul>
    <h3>Отзывы:</h3>
    <ul>
      <li>{restaurants[0].reviews[0].text}</li>
      <li>{restaurants[0].reviews[1].text}</li>
    </ul>

    <h2>{restaurants[1].name}</h2>
    <h3>Меню:</h3>
    <ul>
      <li>{restaurants[1].menu[0].name}</li>
      <li>{restaurants[1].menu[1].name}</li>
    </ul>
    <h3>Отзывы:</h3>
    <ul>
      <li>{restaurants[1].reviews[0].text}</li>
      <li>{restaurants[1].reviews[1].text}</li>
      <li>{restaurants[1].reviews[2].text}</li>
    </ul>

    <h2>{restaurants[2].name}</h2>
    <h3>Меню:</h3>
    <ul>
      <li>{restaurants[2].menu[0].name}</li>
      <li>{restaurants[2].menu[1].name}</li>
      <li>{restaurants[2].menu[2].name}</li>
    </ul>
    <h3>Отзывы:</h3>
    <ul>
      <li>{restaurants[2].reviews[0].text}</li>
    </ul>

    <h2>{restaurants[3].name}</h2>
    <h3>Меню:</h3>
    <ul>
      <li>{restaurants[3].menu[0].name}</li>
      <li>{restaurants[3].menu[1].name}</li>
    </ul>
    <h3>Отзывы:</h3>
    <ul>
      <li>{restaurants[3].reviews[0].text}</li>
      <li>{restaurants[3].reviews[1].text}</li>
    </ul>
  </div>
);

// root.render(
//   React.createElement('div', {
//     children: [
//       React.createElement('h2', { children: restaurants[0].name, key: restaurants[0].id }),
//       React.createElement('h3', { children: 'Меню:' }),
//       React.createElement('ul', {
//         children: [
//           React.createElement('li', { children: restaurants[0].menu[0].name, key: restaurants[0].menu[0].id }),
//           React.createElement('li', { children: restaurants[0].menu[1].name, key: restaurants[0].menu[1].id }),
//           React.createElement('li', { children: restaurants[0].menu[2].name, key: restaurants[0].menu[2].id }),
//         ],
//       }),
//       React.createElement('h3', { children: 'Отзывы:' }),
//       React.createElement('ul', {
//         children: [
//           React.createElement('li', { children: restaurants[0].reviews[0].text, key: restaurants[0].reviews[0].id }),
//           React.createElement('li', { children: restaurants[0].reviews[1].text, key: restaurants[0].reviews[1].id }),
//         ],
//       }),

//       React.createElement('h2', { children: restaurants[1].name, key: restaurants[1].id }),
//       React.createElement('h3', { children: 'Меню:' }),
//       React.createElement('ul', {
//         children: [
//           React.createElement('li', { children: restaurants[1].menu[0].name, key: restaurants[1].menu[0].id }),
//           React.createElement('li', { children: restaurants[1].menu[1].name, key: restaurants[1].menu[1].id }),
//         ],
//       }),
//       React.createElement('h3', { children: 'Отзывы:' }),
//       React.createElement('ul', {
//         children: [
//           React.createElement('li', { children: restaurants[1].reviews[0].text, key: restaurants[1].reviews[0].id }),
//           React.createElement('li', { children: restaurants[1].reviews[1].text, key: restaurants[1].reviews[1].id }),
//           React.createElement('li', { children: restaurants[1].reviews[2].text, key: restaurants[1].reviews[2].id }),
//         ],
//       }),

//       React.createElement('h2', { children: restaurants[2].name, key: restaurants[2].id }),
//       React.createElement('h3', { children: 'Меню:' }),
//       React.createElement('ul', {
//         children: [
//           React.createElement('li', { children: restaurants[2].menu[0].name, key: restaurants[2].menu[0].id }),
//           React.createElement('li', { children: restaurants[2].menu[1].name, key: restaurants[2].menu[1].id }),
//           React.createElement('li', { children: restaurants[2].menu[1].name, key: restaurants[2].menu[2].id }),
//         ],
//       }),
//       React.createElement('h3', { children: 'Отзывы:' }),
//       React.createElement('ul', {
//         children: [React.createElement('li', { children: restaurants[2].reviews[0].text, key: restaurants[2].reviews[0].id })],
//       }),

//       React.createElement('h2', { children: restaurants[3].name, key: restaurants[3].id }),
//       React.createElement('h3', { children: 'Меню:' }),
//       React.createElement('ul', {
//         children: [
//           React.createElement('li', { children: restaurants[3].menu[0].name, key: restaurants[3].menu[0].id }),
//           React.createElement('li', { children: restaurants[3].menu[1].name, key: restaurants[3].menu[1].id }),
//         ],
//       }),
//       React.createElement('h3', { children: 'Отзывы:' }),
//       React.createElement('ul', {
//         children: [
//           React.createElement('li', { children: restaurants[3].reviews[0].text, key: restaurants[3].reviews[0].id }),
//           React.createElement('li', { children: restaurants[3].reviews[0].text, key: restaurants[3].reviews[1].id }),
//         ],
//       }),
//     ],
//   })
// );
