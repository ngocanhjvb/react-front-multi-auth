import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'
import {store} from "./createStore";
import './index.css';
import { Provider } from 'react-redux';



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
