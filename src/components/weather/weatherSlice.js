import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import weatherAPI from '../../api/weatherApi';

export const fetchWeather = createAsyncThunk('weather/fetchWeather',
    async(arg, thunkAPI)=>{
        try{
            const myWeather = await weatherAPI.fetchMyweather();
            return myWeather;

        }catch(error){
            const err ={
            name:'failed',
            message:'api request failed',
            }
            return thunkAPI.rejectWithValue(err);
        }
    }
)

const options = {
    name: 'weather',
    initialState: { weather:{
            temperature: '',
            description: '',
            icon: '',
        },
        isLoading: false,
        hasError: false,
    },
    reducers: {
        
    },
    extraReducers: {
        [fetchWeather.fulfilled]:(state, action)=>{
            state.isLoading = false;
            state.hasError = false;
            state.weather = action.payload;
        },

        [fetchWeather.pending]: (state)=>{
            state.isLoading = true;
            state.hasError = false;
        },

        [fetchWeather.rejected]:(state, action)=>{
            state.isLoading = false;
            state.hasError = action.payload;
        }
    }
}

const weatherSlice = createSlice(options);

export const currentWeather = state => state.weather.weather;
export const loadingStatus = state => state.weather.isLoading;
export const errorStatus = state => state.weather.hasError;

export default weatherSlice.reducer;