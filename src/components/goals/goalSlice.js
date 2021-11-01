import { createSlice } from "@reduxjs/toolkit";

const options = {
    name:'goal',
    initialState:{
        goals:[]
    },
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

const goalSlice = createSlice(options);

export const yourGoals = state => state.goal.goals; 
export const { addGoal, deleteGoal, completeGoal } = goalSlice.actions;
export default goalSlice.reducer;