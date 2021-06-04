import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './components/Autorisation/index.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './App';
import axios from "axios";

axios.defaults.baseURL="http://localhost:8080/"

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

