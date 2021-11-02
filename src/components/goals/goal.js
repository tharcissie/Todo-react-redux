import { useDispatch } from 'react-redux';
import { deleteGoal, completeGoal } from './goalSlice';
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

function Goal(props) {

    const { id, text, isCompleted } = props

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteGoal({ id: id }));
    }

    const handleComplete = () => {
        dispatch(completeGoal({ id: id }));
    }


    return (
        <div key={id}>

            <div>

                {!isCompleted ? <p>{text}<IoClose className="text-danger" onClick={handleDelete} />
                    <IoCheckmarkDoneSharp className="text-success" onClick={handleComplete} /></p> : 
                    <p>{text}<IoClose className="text-danger" onClick={handleDelete} /></p>}

            </div>
        </div>
    )
}

export default Goal;