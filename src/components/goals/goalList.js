import { useSelector } from 'react-redux';
import {  yourGoals } from './goalSlice';
import Goal from './goal';

function GoalList() {

    const goals = useSelector(yourGoals)

    return (
        <>
        <h1>Active</h1>
        {goals.map(goal =>{
            const {id, text, isCompleted } = goal;
            {if(!goal.isCompleted)
            return <Goal id={id} text={text} isCompleted={isCompleted}/>
            }
        })}
        <h1>Completed</h1>
        {goals.map(goal =>{
            const {id, text, isCompleted } = goal;
            {if(goal.isCompleted)
            return <Goal id={id} text={text} isCompleted={isCompleted}/>
            }
        })}
        </>
    )
        
}

export default GoalList;