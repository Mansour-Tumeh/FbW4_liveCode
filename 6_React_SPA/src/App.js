import React, { Component } from 'react';

import './App.css';

class App extends Component {
  sayName = () => 'My Name';

  render() {
    const name = 'Safwan Kher';
    const loading = false;
    const showName = false;
    // if (loading) {
    //   return <h2 className='App'>loading ...</h2>;}

    return (
      <>
        <header className='App'>
          {loading ? <h4>loading ...</h4> : <h1>{showName && name}</h1>}
        </header>
      </>
    );
  }
}

export default App;
