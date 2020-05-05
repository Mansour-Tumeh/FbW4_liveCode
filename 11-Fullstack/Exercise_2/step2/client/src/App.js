import React from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Provider store={store}> 
      <Router>

        <Switch>
          
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
