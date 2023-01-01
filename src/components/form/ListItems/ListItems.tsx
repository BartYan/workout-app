import type { NextPage } from 'next';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectWorkout } from '../../../../slices/workoutSlice';

import Editable from '../../editable/Editable';
import HeadItem from '../../itemsTypes/HeadItem/HeadItem';
import AddItem from '../AddItem/AddItem';

import styles from '../../../../styles/Home.module.scss';

interface PropTypes {
    workout: any;
    handleOnRemove: any;
    handleEdit: any;
};

const ListItems: NextPage<PropTypes> = ({workout, handleOnRemove, handleEdit}) => {

    const workoutR = useSelector(selectWorkout)

    useEffect(() => {
      console.log('workoutR ListItems', workoutR)
    }, [workoutR]);

    return (
      <div className={styles.items__wrapper}>
        {workoutR.length === 0 && (
          <h3>
            Dodaj pierwszą serię i zaczynamy!
          </h3>
        )}

        {workoutR.length > 0 && (
          workoutR.map((todo: any, index: any) => {
            
            if(todo.type == 'head') {
              return (
                <>
                  <HeadItem
                    todo={todo}
                    index={index}
                    handleOnRemove={handleOnRemove} 
                    handleEdit={handleEdit}
                  />
                </>
              )
            }

          })
        )}

        
      </div>
    );
}
export default ListItems