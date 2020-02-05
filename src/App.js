import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [val, setVal] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 onClick={()=>{window.location.href='http://localhost:3000/#1'}}>My Counter</h1>
        <p className='val' id='val'>{val}</p>
        <input type='text' className='id'/>
        <button
          id='button'
          type='button'
          onClick={
            ()=> {
              setVal(val+1);
            }
          }
        >+1</button>

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

export default App;
