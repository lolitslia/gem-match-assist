import React, { useState } from 'react';
import './App.css';
import Gem from './components/Gem';
import backgroundImage from './background.png';

function App() {
  const [resetTrigger, setResetTrigger] = useState(0);
  
  const handleReset = () => {
    setResetTrigger(prev => prev + 1);
  };
  
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="wapper">
        <h1 className="title">
          <span className="letter letter-g">G</span>
          <span className="letter letter-e">e</span>
          <span className="letter letter-m">m</span>
          <span className="letter letter-space">&nbsp;</span>
          <span className="letter letter-m2">M</span>
          <span className="letter letter-a">a</span>
          <span className="letter letter-t">t</span>
          <span className="letter letter-c">c</span>
          <span className="letter letter-h">h</span>
        </h1>
        <div className="gem-grid">
          {Array(12).fill().map((_, index) => (
            <Gem key={index} resetTrigger={resetTrigger} />
          ))}
        </div>
        <button className="reset-button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;