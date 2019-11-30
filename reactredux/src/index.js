import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../src/login';
import Note from '../src/note';
//import Navbar from './Navbar';


ReactDOM.render(<BrowserRouter forceRefresh={false}>
    <Provider store={configureStore()}>
      <Switch>
        <Route exact path="/Note" component={Note} /> 
        <Route exact path="/" component={Login} />
      </Switch>
    </Provider>,
    </BrowserRouter>,document.getElementById('root')
   );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
