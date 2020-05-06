import React from 'react';
import Form from './components/Form';
import Info from './components/Info';
import Clock from './components/Clock';
import ActionLink from './components/ActionLink';
import ListItems from './components/ListItems';
import TextField from './components/TextField';
import './App.css';
import './common.scss';

const name = 'Nicole';

const element = (
  <h1>
    Hello, {name}!
  </h1>
);

const items = [ 
  {Id:1, Name:'Test 1'}, 
  {Id:2, Name:'Test 2'}, 
  {Id:3, Name:'Test 3'}, 
] 

function App() {
  return (
      <div className="App">  
    
      <h1>Hello Nicole</h1>
          <div>
            <ActionLink actionText={'This is an Action Link'} />
          </div>
          <div>
            <TextField title='Nicole' />
          </div>
      </div>
    )
}

export default App;
