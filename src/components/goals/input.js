import { useState } from 'react';
import { addGoal } from './goalSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


function InputGoals(){

    const style ={
        boxShadow: '0 15px 25px rgba(129, 124, 124, 0.2)',
        borderRadius: '5px',
        backdropFilter: 'blur(14px)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        textAlign: 'center',
    }
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
        <div className="row justify-content-center">
        <div className = "mt-3 col-md-10 p-3" style={style}>
            <form onSubmit={handleSubmit}>
                <h6>What's on your mind today?</h6>
                    <input 
                        id="input-Goals" 
                        type ='text' 
                        value = {userInput}
                        onChange = {handleChange}
                        autoComplete= "off"
                        className="form-control"
                    />
            </form>
        </div>
        </div>
    );
}

export default InputGoals;