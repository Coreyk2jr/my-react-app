import React, { useState } from 'react';

function RandomQuote() {
  const [quote, setQuote] = useState('');

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchRandomQuote}>
        Generate Random Quote
      </button>
      <p>{quote}</p>
    </div>
  );
}

export default RandomQuote;
