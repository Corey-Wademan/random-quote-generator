import React, {useState, useEffect} from 'react';
import './App.css';
import QuoteBoxDisplay from './QuoteBoxDisplay';
import quotes from './quotes';

function App() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0].quote);
  const [currentAuthor, setCurrentAuthor] = useState(quotes[0].author);


  const randomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  };
  
  const handleClick = () => {
    const generateQuote = randomQuote();
    setCurrentQuote(generateQuote.quote);
    setCurrentAuthor(generateQuote.author);
  };

  const randomColor = () => {
    const color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    return color
  }

  return (
    <div className='wrapper' style={{backgroundColor: randomColor}}>
      <QuoteBoxDisplay 
        handleClick={handleClick}
        displayColor={randomColor}
        currentAuthor={currentAuthor}
        currentQuote={currentQuote}
        />
    </div>
  );
}

export default App;
