import React, { Component } from 'react';
import { Login } from './Login'
import { Main } from './Main'



 interface State{isLoggedIn:boolean};

export default class App extends Component {
  state:State={isLoggedIn:false};
  render() {  
    return (
      <div className="app">
       { this.state.isLoggedIn ? <Main />: <Login />}
      </div>
    );
  }
}



/*import logo from './logo.svg';
import './App.css';
import './chat.d.ts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
