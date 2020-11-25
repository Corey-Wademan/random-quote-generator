import React from 'react';


const QuoteBoxDisplay = (props) => {

    const randomColor = props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;
    
    return (
            <div id='quote-container'>
                <div id='quote-box'>
                    <h1 style={{color: randomColor}} id='text'><span>"</span>{props.currentQuote}<span>"</span></h1>
                    <h6 id='author'>-{props.currentAuthor ? props.currentAuthor : 'Unknown'}</h6>
                </div>
                <button style={{backgroundColor: randomColor}}
                        id='new-quote'
                        onClick={props.handleClick}>New Quote</button>
                <a href={(`https://twitter.com/intent/tweet?text=${props.currentQuote}%20-${props.currentAuthor}`)}
                id="tweet-quote" target='_blank'>Tweet</a>
            </div>
    )
}

export default QuoteBoxDisplay