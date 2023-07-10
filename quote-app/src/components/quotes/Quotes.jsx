import { useState, useEffect } from 'react';


const Quotes = () => {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        getQuote()
    }, []);

    const getQuote = () => {
        // Fetching the link
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

        fetch(url) 
            .then(res => res.json())
            .then(data => {
                let dataQuotes = data.quotes;
                let randomNum = Math.floor(Math.random() * dataQuotes.length);

                let randomQuote = dataQuotes[randomNum];

                setQuote(randomQuote.quote);
                setAuthor(randomQuote.author);
            })
    }

    const handleClick = () => {
        getQuote();
    }


    return (
        <>
            <div>
                {quote}
            </div>
            <div>
                {author}
            </div>

            <button onClick={handleClick}>New Quote</button>

        </>
    )
}

export default Quotes;