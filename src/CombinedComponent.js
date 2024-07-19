import React, { useState, useEffect } from 'react';

function HelloWorld() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/hello/')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

function Goodbye() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/goodbye/')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

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
      Inspire Me with a Quote
      </button>
      <p>{quote}</p>
    </div>
  );
}

function CookingPerspective({ perspective }) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h3>Cooking Perspective:</h3>
      <p>{perspective}</p>
    </div>
  );
}

function CombinedComponent() {
  const [showHello, setShowHello] = useState(true);

  const toggleMessage = () => {
    setShowHello(prevShowHello => !prevShowHello);
  };

  const novicePerspective = `
    As someone new to cooking, the kitchen can seem both exciting and intimidating. 
    There are so many ingredients, tools, and techniques to learn about, and the thought 
    of preparing a meal from scratch might feel overwhelming. The focus is often on 
    following recipes closely, learning basic skills, and gaining confidence in the kitchen.

    Challenges:
    - Understanding Recipes: Deciphering cooking terminology and measurements can be confusing.
    - Basic Techniques: Learning how to properly chop vegetables, sauté, and bake.
    - Time Management: Timing everything correctly so that all parts of a meal are ready 
      at the same time.
    - Ingredient Familiarity: Knowing which ingredients work well together and where to 
      find them in the store.

    Approach:
    - Simple Recipes: Start with simple, straightforward recipes that require few ingredients 
      and steps.
    - Tutorials and Classes: Watching cooking tutorials online or taking beginner cooking 
      classes to build foundational skills.
    - Practice and Patience: Practicing regularly and being patient with mistakes, as they 
      are part of the learning process.
    - Invest in Basic Tools: Having a good knife, cutting board, and basic cookware can 
      make cooking easier and more enjoyable.
  `;

  const veteranPerspective = `
    As a veteran cook, the kitchen is a place of creativity and experimentation. Years of 
    experience have honed skills and instincts, making it easier to improvise and create 
    dishes without relying strictly on recipes. Cooking is often a relaxing and enjoyable 
    activity, and there's a deep understanding of flavors, techniques, and ingredients.

    Strengths:
    - Skill Mastery: Proficient in a wide range of cooking techniques and comfortable with 
      complex recipes.
    - Ingredient Knowledge: Familiar with a vast array of ingredients and how to use them 
      creatively.
    - Efficiency: Able to manage time and multitask effectively in the kitchen.
    - Innovation: Enjoys experimenting with new recipes, flavors, and cooking methods.

    Approach:
    - Recipe Adaptation: Frequently modifies recipes to suit personal taste or dietary 
      preferences.
    - Advanced Techniques: Uses advanced cooking techniques like sous-vide, fermentation, 
      and pastry making.
    - Ingredient Sourcing: Seeks out high-quality or specialty ingredients from farmers' 
      markets, specialty stores, or online.
    - Sharing Knowledge: Enjoys teaching and sharing cooking tips and recipes with others, 
      whether through cooking classes, blogs, or social media.
  `;

  return (
    <div>
      <button onClick={toggleMessage}>
        {showHello ? 'Show Veteran View' : 'Show Novice View'}
      </button>
      {showHello ? <HelloWorld /> : <Goodbye />}
      <CookingPerspective 
        perspective={showHello ? novicePerspective : veteranPerspective}
      />
      <RandomQuote />
    </div>
  );
}

export default CombinedComponent;
