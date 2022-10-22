import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectWorkout } from '../../../../slices/workoutSlice';

interface PropTypes {
    workout: any;
    // handleOnChange: (e, index) => void;
    // handleOnRemove: (index) => void;
    // handleOnEdit: (index) => void;
    handleOnChange: any;
    handleOnRemove: any;
    handleOnEdit: any;
};

const ListItems: NextPage<PropTypes> = ({workout, handleOnEdit, handleOnRemove, handleOnChange,}) => {

    const workoutR = useSelector(selectWorkout)

    const todoItem = workoutR.map((todo, index) => {
      return (
        <div key={todo.id} className="">
          <div className="">
            <div className="todoTitle">
              <span>
                {todo.title}
              </span>
            </div>
            <div>
              <div
                className=""
                aria-hidden="true"
                onClick={() => handleOnEdit(index)}
              >
                Edit
              </div>
              <div
                onClick={() => handleOnRemove(index)}
                className=""
                aria-hidden="true"
              >
                remove
              </div>
            </div>
          </div>
        </div>
      );
    });
    
    useEffect(() => {
        console.log('LIST ITEMS WORKOUT',workout)
        console.log('LIST ITEMS todoItem',todoItem)
        console.log('LIST ITEMS workoutR',workoutR)
    }, [workout]);

    return (
      <div className="test itemList">
        <hr />
        {workoutR.length === 0 && (
          <h3 className="">Let's get some work done!</h3>
        )}
        {workoutR.length > 0 && todoItem}
      </div>
    );
}
export default ListItems