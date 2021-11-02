import { useState } from 'react';
import { addGoal } from './goalSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


function InputGoals(){
    const [userInput, setUserInput ] = useState(''); 

    const dispatch = useDispatch();

    const handleChange = (event) =>{
        const input = event.target.value; 
        setUserInput(input); 
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(userInput){
            const payload = {
                id:uuidv4(), 
                text:userInput, 
                isCompleted:false
            }
            dispatch(addGoal(payload));
            setUserInput('');    
        }
    }

    return (
        <section className = "add-Goal">
            <form onSubmit={handleSubmit}>
                <h2>What's on your mind today?</h2>
                    <input 
                        id="input-Goals" 
                        type ='text' 
                        value = {userInput}
                        onChange = {handleChange}
                        autoComplete= "off"
                    />
            </form>
        </section>
    );
}

export default InputGoals;