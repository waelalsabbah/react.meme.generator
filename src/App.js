import React, { useEffect, useState } from 'react';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState();
  const handleTopTextChange = (e) => {
    setTopText(e.target.value);
  };

  const handleBottomTextChange = (e) => {
    setBottomText(e.target.value);
  };
  /*const handleMemeTemplateChange = (e) => {
    setMemeTemplate(e.target.value);
  };*/

  useEffect(() => {
    // Fetch memes from a URL
    fetch('https://memegen.link/ ')
      .then((response) => response.json())
      .then((Gif) => {
        setMemeTemplate(Gif); // Store the meme data in state
      })
      .catch((error) => {
        console.error('Error fetching memes:', error);
      });
  }, []);
  return (
    <div className="meme-generator">
      <h1>Meme Generator</h1>
      <img
        src="https://api.memegen.link/images/buzz/memes/memes_everywhere.gif"
        alt="Meme"
        data-test-id="meme-image"
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
          <button> Meme Generator</button>
        </div>
      </div>
    </div>
  );
}
