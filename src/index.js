import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers/reducers';
import thunk from 'redux-thunk';

ReactDOM.render(
    <Provider store={
            createStore(reducers,
                        applyMiddleware(thunk)
            )
    }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
