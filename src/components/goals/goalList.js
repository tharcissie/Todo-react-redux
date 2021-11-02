import { useSelector } from 'react-redux';
import { yourGoals } from './goalSlice';
import Goal from './goal';

function GoalList() {

    const goals = useSelector(yourGoals)

    const style = {
        maxHeight: '50vh',
        overflowY: 'auto',
        boxShadow: '0 15px 25px rgba(129, 124, 124, 0.2)',
        borderRadius: '5px',
        backdropFilter: 'blur(14px)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        textAlign: 'center',
    }

    return (
        <div className="row justify-content-center" >
            <div className="col-md-10">
                <div className="row  pt-4" style={style}>
                    <div className="col-md-6">
                        <h5>Active</h5>
                        {goals.map(goal => {
                            const { id, text, isCompleted } = goal;
                            
                                if (!goal.isCompleted)
                                    return <Goal key={id} id={id} text={text} isCompleted={isCompleted} />
                                    return null
                            
                        })}
                    </div>
                    <div className="col-md-6" >
                        <h5>Completed</h5>
                        {goals.map(goal => {
                            const { id, text, isCompleted } = goal;
                            
                                if (goal.isCompleted)
                                    return <Goal key={id} id={id} text={text} isCompleted={isCompleted} />
                                    return null
                            
                        })}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default GoalList;