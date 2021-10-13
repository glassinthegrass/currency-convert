import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter,Switch,Route} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserHistory}from 'history'
const history = createBrowserHistory();
const Router = process.env.NODE_ENV ==='development'?HashRouter:BrowserRouter;
const root= document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
<Router history={history} basename='/currency-convert'>
<Switch>
<Route exact path='/' component={App}/>
</Switch>
</Router>
  </React.StrictMode>,
 root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
