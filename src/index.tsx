import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './common/UI/global.styles';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <GlobalStyle />
    <Router>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </Router>
  </>,
);

reportWebVitals();
