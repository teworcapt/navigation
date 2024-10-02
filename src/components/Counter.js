import React, { useState } from 'react';
import Navbar from './Navbar'; 

function Counter() {
  const [count, setCount] = useState(0);
  return (
      <div>
      <Navbar />
      <h1>Counter</h1>   
      <p>Number: {count} </p>
        <button onClick={() => setCount(prev => prev + 1)}> Increment </button>
        <button onClick={() => setCount(prev => prev - 1)}> Decrement </button>
        <button onClick={() => setCount(0)}> Reset </button>
      </div>
  );
}

export default Counter;