import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {imagesArray, imageIndex, numberOfPages, currentPage, fetchBackground, setPage, getNextImage, getPreviousImage} from '../background/backgroundSlice'
import Quote from '../quotes/quote';

function App() {
    const dispatch = useDispatch();
    const page = useSelector(currentPage);

    useEffect(() => {
        dispatch(fetchBackground(page));
    }, [dispatch, page])

    const defaultImageURL = 'https://media.istockphoto.com/photos/herbal-tea-and-espresso-coffee-picture-id1262209851?b=1&k=20&m=1262209851&s=170667a&w=0&h=KshtCZ59qyjLZkygHwE7-_uko8X7Zu-GkjYRaoS7tbw=';

    let style = {
        backgroundImage: `url(${defaultImageURL})`,
        backgroundSize: 'cover',
        height: '100vh'
    }

    const currentIndex = useSelector(imageIndex);
    const images = useSelector(imagesArray)
    const image = images[currentIndex];

   if (image !== undefined) { 
        const background = `url(${image.urls.regular})`;
        style.backgroundImage = background;
    }

    const maxIndex = images.length - 1;
    const totalPages = useSelector(numberOfPages);

    const handleNextImage = () => {
        if (currentIndex < maxIndex) {
            dispatch(getNextImage());
        } else {
            if (page < totalPages) {
                const payload = { page: page + 1 }
                dispatch(setPage(payload));
            }
        }
    }

    const handlePreviousImage = () => {
        if (currentIndex > 0) {
            dispatch(getPreviousImage());
        } else {
            if (page > 1) {
                const payload = { page: page - 1 }
                dispatch(setPage(payload));
            }
        }
    }




    return (
        <div className="App" style={style} >
            <section >
                <span id="prev"  onClick={handlePreviousImage}>
                    arrow_back_ios
                </span><br />
                <span id="next"  onClick={handleNextImage}>
                    arrow_forward_ios
                </span>
            </section>
            <Quote/>
        </div>
    );
}

export default App;
