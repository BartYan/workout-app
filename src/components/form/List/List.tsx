import type { NextPage } from 'next';
import { useState, useEffect, SetStateAction }from 'react';
import { useDispatch } from 'react-redux';
import { save } from '../../../../slices/workoutSlice';

import styles from '../../../../styles/Home.module.scss';
import Form from '../Form/Form';
import ListItems from '../ListItems/ListItems';

interface ItemTypes {
    id: number;
    title: string;
    isCompleted: boolean;
};

const List: NextPage = () => {
    const dispatch = useDispatch();

    const [workout, setWorkout] = useState<ItemTypes | any>([]);
    const [newItem, setNewItem] = useState('');

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => setNewItem(e.target.value);
  
    const handleEdit = (el: { current: { id: number; }; }, value: any) => {

      let itemsList = [...workout];
      workout.filter((item, index) => {
        if (item.id == el.current.id) {
          const newItem = {
            id: item.id,
            title: value,
            isCompleted: item.isCompleted
          }
          itemsList.splice(index, 1, newItem);
        }
        return item;
      });
      setWorkout(itemsList);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
    
      let workoutLength = workout.length;
      if (newItem === "") {
        return;
      }
      setNewItem('');
      setWorkout([
        ...workout,
        {
          id: (workoutLength += 1),
          title: newItem,
          isCompleted: false,
        },
      ]);
    };

    const removeItem = (index: number) => {
      const newWorkout = [...workout];
      newWorkout.splice(index, 1)
      setWorkout(newWorkout);
    };

    useEffect(() => {      
      dispatch(save(workout));
    }, [workout]);

    return (
        <div className={styles.list}>
            <Form
                workout={workout}
                newItem={newItem}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <ListItems
                workout={workout}
                handleOnRemove={removeItem}
                handleEdit={handleEdit}
            />
        </div>
    )
}
export default List