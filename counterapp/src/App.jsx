import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <div className="card">
      <h1 className="title">🚀 Stylish Counter</h1>

        <div className="count-display">{count}</div>
        <div className="buttons">
          <button className="btn btn-green" onClick={() => setCount(count + 1)}>
            ➕ Increment
          </button>
          <button className="btn btn-blue" onClick={() => setCount(count - 1)}>
            ➖ Decrement
          </button>
          <button className="btn btn-red" onClick={() => setCount(0)}>
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
