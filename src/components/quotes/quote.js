import { useSelector, useDispatch } from 'react-redux';
import { todayQuote, fetchQuote, loadingStatus, errorStatus } from './quoteSlice';
import { useEffect } from 'react';
import './quote.css'

function Quote() {
    const dispatch = useDispatch();

    const loading = useSelector(loadingStatus);
    const error = useSelector(errorStatus);

    useEffect(() => {
        dispatch(fetchQuote());
    }, [dispatch]);
    const quote = useSelector(todayQuote);
    console.log(quote)

    let body = {
        boxShadow: '0 15px 25px rgba(129, 124, 124, 0.2)',
        borderRadius: '5px',
        backdropFilter: 'blur(14px)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }

    if (loading) {
        return (
            <section className="fixed-bottom container card p-3" style={body}>
                <p>Loading quote...</p>
            </section>
        );
    } else if (error) {
        return (
            <section className="fixed-bottom container card p-3" style={body}>
                <p>Error! {error.message}</p>
            </section>
        );
    } else {

        return (
            <div className="fixed-bottom container card p-1" style={body}>
                <h6>"{quote.content}"</h6>
                <p>--{quote.author}</p>
            </div>)
    }
}


export default Quote;