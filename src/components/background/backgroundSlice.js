import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import imageAPI from '../../api/imageApi';

export const fetchBackground = createAsyncThunk('image/fetchBackground',
    async(newPage, thunkAPI)=>{
        try {
            const fetchedImageData = await imageAPI.fetchBackground(newPage);  
            return fetchedImageData; 

        }catch(error){
            const err = {
                name:'failed',
                message:'api requestfailed',
            }
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const options = {
    name:'image',
    initialState: {
        images : [], 
        previousPage: 0,
        page: 1, 
        imageIndex: 0, 
        totalPages: 0,
        isLoading:false,
        hasError:false,
    },
    reducers:{
        getNextImage : (state) => {
            state.imageIndex +=1;
        },
        
        getPreviousImage : (state) => {
            state.imageIndex -=1;
        },

        setPage : (state, action)=>{
            state.previousPage = state.page;
            state.page = action.payload.page;
        },

        setIndex : (state, action)=>{
            state.imageIndex = action.payload.imageIndex;
        }
    },
    extraReducers:{
        [fetchBackground.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.hasError = false;
            state.images = action.payload.images; 
            state.totalPages = action.payload.totalPages; 
        },
        [fetchBackground.pending]:(state)=>{
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchBackground.rejected]:(state, action)=>{
            state.isLoading = false;
            state.hasError = action.payload;
        },
    },
}

const imageSlice = createSlice(options);

export const imageIndex = state => state.image.imageIndex;
export const imagesArray = state => state.image.images;
export const currentPage = state => state.image.page;
export const numberOfPages = state => state.image.totalPages;
export const loadingStatus = state => state.image.isLoading;
export const errorStatus = state => state.image.isError;

export const { getNextImage, getPreviousImage, setIndex, setPage } = imageSlice.actions;

export default imageSlice.reducer;