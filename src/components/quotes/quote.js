import { useSelector, useDispatch } from 'react-redux';
import { todayQuote, fetchQuote } from './quoteSlice';
import { useEffect } from 'react';
import './quote.css'

function Quote() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQuote());
    }, [dispatch]);
    const quote = useSelector(todayQuote);
    console.log(quote)

    return (
        <div>
            <h3>{quote.content}</h3>
            <p>{quote.author}</p>
        </div>)
}


export default Quote;