import React from 'react';
import Form from './components/Form';
import Info from './components/Info';
import Clock from './components/Clock';
import ActionLink from './components/ActionLink';
import './App.css';
import './common.scss';

const name = 'Nicole';

const element = (
  <h1>
    Hello, {name}!
  </h1>
);

function App() {
  console.log(`I'm the payment-options-component`);
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          <Info height={50} />
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          My Name is: {element}
        </p>
        <p>
          <Clock />
        </p>
        <p>
          <ActionLink actionText={'Some Action Text'} />
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
        <h2>{process.env.DEV_URL}</h2>
      </header>
    </div>
  );
}

export default App;
