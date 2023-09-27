import './App.css';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [templateName, setTemplateName] = useState('doge');
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

  const handleDownload = () => {
    const templateImageUrl = `https://api.memegen.link/images/${templateName}/${topText}/${bottomText}.png `;

    const downloadLink = document.createElement('a');
    downloadLink.href = templateImageUrl;
    downloadLink.download = 'template.jpg';

    downloadLink.click();
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
      <div className="meme-image-container">
        <img
          src={`https://api.memegen.link/images/${templateName}/${topText}/${bottomText}.png`}
          data-test-id="meme-image"
          alt="custom meme"
          name={templateName}
        />
      </div>
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
          <label>
            Template Name <br />
            <input
              value={templateName}
              onChange={(event) => setTemplateName(event.currentTarget.value)}
            />
          </label>
          <br />
          <br />
          <button onClick={handleDownload}>Download Template</button>
        </div>
        <label htmlFor="templateSelector">Meme Template:</label>
      </div>
    </div>
  );
}
