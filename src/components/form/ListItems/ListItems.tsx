import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectWorkout } from '../../../../slices/workoutSlice';
import Editable from '../../editable/Editable';

import styles from '../../../../styles/Home.module.scss';

interface PropTypes {
    workout: any;
    handleOnRemove: any;
    handleEdit: any;
};

const ListItems: NextPage<PropTypes> = ({workout, handleOnRemove, handleEdit}) => {

    const workoutR = useSelector(selectWorkout)
    const todoItem = workoutR.map((todo, index) => {
      return (
        <div className={styles.list__item}>
          <Editable handleChange={handleEdit}>
            <div key={todo.id} id={todo.id} className={styles.list__item_text}>
                <span>
                  {todo.title}
                </span>
            </div>
          </Editable>
          <div className={styles.list__item_delete}>
            <button
              onClick={() => handleOnRemove(index)}
              aria-hidden="true"
              type='button'
            >
              {/* <img src="../../../../../public/close-icon.svg" alt="usuń element" /> */}
              <svg id="close" version="1.1" viewBox="0 0 512 512" width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>
            </button>
        </div>
      </div>
      );
    });
    
    useEffect(() => {
        console.log('LIST ITEMS WORKOUT',workout)
        console.log('LIST ITEMS todoItem',todoItem)
        console.log('LIST ITEMS workoutR',workoutR)
    }, [workout, todoItem, workoutR]);

    return (
      <div className={styles.items__wrapper}>
        {workoutR.length === 0 && (
          <h3>
            Dodaj pierwszą serię i zaczynamy!
          </h3>
        )}
        {workoutR.length > 0 && todoItem}
      </div>
    );
}
export default ListItems