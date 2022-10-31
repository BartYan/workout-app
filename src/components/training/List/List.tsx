import type { NextPage } from 'next'
import { useState, useEffect }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { save, selectWorkout } from '../../../../slices/workoutSlice'

import styles from '../styles/Home.module.scss';
import Form from '../Form/Form';
import ListItems from '../ListItems/ListItems';

interface ItemTypes {
    id: number;
    title: string;
    isCompleted: boolean;
};

const List: NextPage = () => {
    const workoutR = useSelector(selectWorkout)
    const dispatch = useDispatch();

    const [workout, setWorkout] = useState<ItemTypes | any>([]);
    const [newItem, setNewItem] = useState('');

    const handleChange = (e) => setNewItem(e.target.value);

    const [st, setSt] = useState('');
    // const handleEdit = (e) => setSt(e);
    const handleEdit = (e) => {
      setSt(e);
      let todos = [...workout];
      todos.filter(todo => {
        if (todo.id === e.index + 1) {
          console.log('todo.title',todo.title)
          todo.title = st;
        }
        return todo;
      });
      setWorkout(todos);
    };

    const handleSubmit = (e) => {
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

    const removeItem = (index) => {
      const newWorkout = [...workout];
      newWorkout.splice(index, 1)
      setWorkout(newWorkout);
    };

    // const editItem = (index) => {
    //   const newWorkout = prompt('Let\'s make some changes');
    //   let todos = [...workout];
    //   todos.filter(todo => {
    //     if (todo.id === index + 1) {
    //       console.log('todo.title',todo.title)
    //       todo.title = newWorkout;
    //     }
    //     return todo;
    //   });
    //   setWorkout(todos);
    // }

    useEffect(() => {      
      dispatch(save(workout));
    }, [workout]);

    return (
        <>
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
                // handleOnEdit={editItem}
            />
        </>
    )
}
export default List