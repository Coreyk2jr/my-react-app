import React, { useState } from 'react';
import HelloWorld from './HelloWorld';
import Goodbye from './Goodbye'; // Correct path to Goodbye.js

function ToggleMessages() {
  const [showHello, setShowHello] = useState(true);

  const toggleMessage = () => {
    setShowHello(prevShowHello => !prevShowHello);
  };

  return (
    <div>
      <button onClick={toggleMessage}>
        {showHello ? 'Show Goodbye' : 'Show Hello'}
      </button>
      {showHello ? <HelloWorld /> : <Goodbye />}
    </div>
  );
}

export default ToggleMessages;

