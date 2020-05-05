import React from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Search from './Pages/Search'

function App() {
  return (
    <Provider store={store}> 
      <Router>

        <Switch>
          <Route path="/" exact>
            <Search />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
