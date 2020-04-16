import React from 'react';
import Form from './components/Form';
import './App.css';
import './common.scss';

function App() {
  console.log(`I'm the payment-options-component`);
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Enter your email address here</h1>
        <Form /> 
      </header>
    </div>
  );
}

export default App;
