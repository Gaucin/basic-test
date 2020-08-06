import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [state, setState] = useState({
    textField: 'Initial text'
  });
  return (
    <div className="App">
      <header className="App-header">          
        <input 
          name="textField"
          onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
          value={state.textField}
        />
        <p>{state.textField}</p>
      </header>
    </div>
  );
}

export default App;
