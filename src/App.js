import './App.css';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [templateName, setTemplateName] = useState('afraid');
  const template = `afraid ${templateName}!`;

  const handleTopTextChange = (e) => {
    setTopText(e.target.value);
  };

  const handleBottomTextChange = (e) => {
    setBottomText(e.target.value);
  };

  const handleTemplateTextChange = (e) => {
    setTemplateName(e.target.value);
  };

  useEffect(() => {
    fetch(`https://memegen.link/ `)
      .then((response) => response.json())
      .then((data) => {
        setTemplateName(data);
      })
      .catch((error) => {
        console.error('Error fetching memes:', error);
      });
  });
  return (
    <div className="meme-generator">
      <h1>Meme Generator</h1>

      <img
        src={`https://api.memegen.link/images/${templateName}.png`}
        data-test-id="meme-image"
        alt="custom meme"
        name={templateName}
      />

      <div className="text-boxes">
        <div className="top-text-box">
          <input
            placeholder="Top Text"
            value={topText}
            onChange={handleTopTextChange}
          />
        </div>
        <div className="bottom-text-box">
          <input
            placeholder="Bottom Text"
            value={bottomText}
            onChange={handleBottomTextChange}
          />
          <br />
          <button>Download</button>
        </div>
      </div>
      <label htmlFor="templateSelector">Meme Template:</label>
      <input
        id="templateSelector"
        value={templateName}
        onChange={handleTemplateTextChange}
      ></input>
    </div>
  );
}
