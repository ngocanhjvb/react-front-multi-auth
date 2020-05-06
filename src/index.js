import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'
import {store} from "./createStore";
import { Provider } from 'react-redux';



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
