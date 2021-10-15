import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css'
import './i18n/configs'//因为在引用i18n会自动将这个API注入
import {Provider} from 'react-redux'
import store from './redux/store'
ReactDOM.render(
  <React.StrictMode>
 <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


