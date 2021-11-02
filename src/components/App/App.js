import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { imagesArray, imageIndex, numberOfPages, currentPage, fetchBackground, setPage, getNextImage, getPreviousImage } from '../background/backgroundSlice'
import Quote from '../quotes/quote';
import Weather from '../weather/weather';
import InputTodos from '../goals/input'
import GoalList from '../goals/goalList'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const dispatch = useDispatch();
    const page = useSelector(currentPage);

    useEffect(() => {
        dispatch(fetchBackground(page));
    }, [dispatch, page])

    const defaultImageURL = 'https://media.istockphoto.com/photos/herbal-tea-and-espresso-coffee-picture-id1262209851?b=1&k=20&m=1262209851&s=170667a&w=0&h=KshtCZ59qyjLZkygHwE7-_uko8X7Zu-GkjYRaoS7tbw=';

    let style = {
        backgroundImage: `url(${defaultImageURL}) `,
        backgroundSize: 'cover',
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'fixed',
        top: 0,
        left: 0,
        //height:'auto',
        width: '100%'
    }

    let body = {
        boxShadow: '0 15px 25px rgba(129, 124, 124, 0.2)',
        borderRadius: '5px',
        backdropFilter: 'blur(14px)',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        textAlign: 'center',
        color:'white'
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
            <div className=" p-3 container">
                <Weather />
                <InputTodos />
                <div className="row" >
                    <div className="col-6 text-start">
                        <i onClick={handlePreviousImage} style={body} className=" p-2 fas fa-chevron-left"></i>
                    </div>
                    <div className="col-6 text-end">
                        <i onClick={handleNextImage} style={body} className="p-2 fas fa-chevron-right"></i>
                    </div>
                </div>

                <GoalList />
            </div>
            <Quote />
        </div>
    );
}

export default App;
