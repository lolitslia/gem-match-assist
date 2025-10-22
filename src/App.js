import React, { useState, useEffect } from 'react';
import './App.css';
import Gem from './components/Gem';
import backgroundImage from './background.png';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [resetTrigger, setResetTrigger] = useState(0);
  
  const handleReset = () => {
    setResetTrigger(prev => prev + 1);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  
  const [isSimplified, setIsSimplified] = useState(
    searchParams.get('detailed') === 'false'
  );
  
  const [isColorBlindMode, setIsColorBlindMode] = useState(
    searchParams.get('symbols') === 'true'
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('detailed', !isSimplified);
    params.set('symbols', isColorBlindMode);
    setSearchParams(params);
  }, [isSimplified, isColorBlindMode, searchParams, setSearchParams]);
  
  
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
          <span className="letter letter-space">&nbsp;</span>
          <span className="letter letter-a2">A</span>
          <span className="letter letter-s">s</span>
          <span className="letter letter-s2">s</span>
          <span className="letter letter-i">i</span>
          <span className="letter letter-s3">s</span>
          <span className="letter letter-t2">t</span>
        </h1>
        <div className={`gem-grid ${isSimplified ? 'simplified' : ''}`}>
          {Array(12).fill().map((_, index) => (
            <Gem 
            key={index} 
            resetTrigger={resetTrigger}
            isSimplified={isSimplified} 
            isColorBlindMode={isColorBlindMode} />
          ))}
        </div>
        <button className="reset-button" onClick={handleReset}>Reset</button>
        <button 
          className="simplify-button" 
          onClick={() => setIsSimplified(!isSimplified)}
        >
          {isSimplified ? 'Detailed' : 'Simplify'}
        </button>
      <div className="toggle-switch">
        <input 
          type="checkbox" 
          id="symbolsToggle" 
          checked={isColorBlindMode}
          onChange={() => setIsColorBlindMode(!isColorBlindMode)}
        />
        <label htmlFor="symbolsToggle" className="toggle-label">
          Symbols
        </label>
      </div>
      </div>
    </div>
  );
}

export default App;