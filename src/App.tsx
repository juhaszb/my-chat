import React, { Component } from 'react';
import { Login } from './Login'
import { Main } from './Main'
import { islogged, proxy } from './chat.d';




/* interface State{isLoggedIn:boolean};
 export var state:State;
*/

export default class App extends Component {

 
  render() {  
    proxy.addEventListener("login",() => this.forceUpdate(),this);
    return (
      <div className="app">
       {!islogged && <Login />}
       {islogged&& <Main />}
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
