import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [heroText, setHeroText] = useState("Loading...");

  // Fetch hero text from FastAPI
  useEffect(() => {
    const fetchHeroText = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/get-hero-text/', {
          page: 'insights'
        });
        setHeroText(response.data.hero_text);
      } catch (error) {
        console.error('Error fetching hero text:', error);
      }
    };

    fetchHeroText();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>{heroText}</h1>
      </header>
    </div>
  );
}

export default App;
