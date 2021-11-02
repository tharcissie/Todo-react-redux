import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from './components/goals/goalSlice';
import weatherReducer from './components/weather/weatherSlice';
import quoteReducer from './components/quotes/quoteSlice';
import imageReducer from './components/background/backgroundSlice';

const rootReducer = {
    image: imageReducer,
    quote: quoteReducer,
    goals: goalsReducer,
    weather: weatherReducer,
}

const store = configureStore({reducer: rootReducer});

export default store;