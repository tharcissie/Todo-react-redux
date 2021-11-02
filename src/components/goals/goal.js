import { useDispatch } from 'react-redux';
import { deleteGoal, completeGoal } from './goalSlice';
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

function Goal(props) {

    const { id, text } = props

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteGoal({id:id}));
    }

    const handleComplete = () => {
        dispatch(completeGoal({id:id}));
    }


    return (
        <div key={id}>
            <IoClose onClick={handleDelete} />
            <IoCheckmarkDoneSharp onClick={handleComplete} />
            <div>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Goal;