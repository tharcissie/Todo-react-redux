import  quoteAPI  from '../../api/quoteApi'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchQuote = createAsyncThunk('quote/fetchQuote',
    async(arg, thunkAPI)=>{
        try {
            const fetchedQuote = await quoteAPI.fetchMyQuote();  
            return fetchedQuote; 

        }catch(error){
            const err = {
                name:'failed',
                message:'api request failed',
            }
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const options = {
    name:'quote',
    initialState:{
        quote:''
    },
    isLoading:false, 
    hasError:false,
    reducers: {
        
    },
    extraReducers:{
        [fetchQuote.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.hasError = false;
            state.quote = action.payload;
        },

        [fetchQuote.pending]:(state)=>{
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchQuote.rejected]:(state,action)=>{
            state.isLoading = false;
            state.hasError = action.payload;
        },
    }
}


const quoteSlice = createSlice(options);

export const todayQuote = state => state.quote.quote; 

export default quoteSlice.reducer;
 

