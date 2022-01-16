import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components';

//создание глобальных стилей всего приложения
//не забывать ставить ";" после каждого свойства!!! 
const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;
  background: black;
}
`

ReactDOM.render(
  <>
    <Global />
    <App />
  </>,
  document.getElementById('root')
);
