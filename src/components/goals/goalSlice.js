import { createSlice } from "@reduxjs/toolkit";

const options = {
    name:'goals',
    initialState:{goals:[{
        id:'13456',
        text:'Shoping',
        isCompleted:false
    },
    {
        id:'29',
        text:'Vising my Mom',
        isCompleted:false
    },
    {
        id:'365',
        text:'Cooking noodles',
        isCompleted:true
    },
    {
        id:'445',
        text:'Getting my passport',
        isCompleted:false
    },
    {
        id:'4345',
        text:'Doing my project',
        isCompleted:false
    },



]},
    reducers: {
        addGoal: (state, action)=>{
            const { id, text, isCompleted } = action.payload;
            state.goals.push({id: id, text:text, isCompleted:isCompleted});
        }, 

        deleteGoal: (state, action)=>{
            const { id } = action.payload;
            state.goals=state.goals.filter(goal => goal.id !== id ); 
        },

        completeGoal: (state, action)=>{
            const { id } = action.payload;
            const index = state.goals.findIndex( goal => goal.id===id );
            state.goals[index].isCompleted = true;
        }
    }
}

const goalsSlice = createSlice(options);

export const yourGoals = state => state.goals.goals; 

export const { addGoal, deleteGoal, completeGoal } = goalsSlice.actions;

export default goalsSlice.reducer;


