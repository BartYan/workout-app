import type { NextPage } from 'next'
import { useState, useEffect }from 'react'

import styles from '../styles/Home.module.scss';
import Form from '../Form/Form';
import ListItems from '../ListItems/ListItems';

interface ItemTypes {
    id: number;
    title: any;
    isCompleted: boolean;
};

const List: NextPage = () => {

    const [workout, setWorkout] = useState<ItemTypes | any>([]);
    const [newItem, setNewItem] = useState('');

    const handleChange = (e) =>  setNewItem(e.target.value);

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

    const toggleCompleted = (e, index) => {
      const completed = workout.filter((item) => {
        if (item.id === index + 1) {
          item.isCompleted = e.target.checked;
        }
        return item;
      });
      setWorkout(completed)
    };

    const removeItem = (index) => {
      console.log('removeItem workout', workout)
      const newWorkout = workout;
      newWorkout.splice(index, 1);
      setWorkout(newWorkout);
      console.log('removeItem workout after', workout)
    };
    // const removeItem = (index) => {
    //   const { todos } = workout;
    //   todos.splice(index, 1);
    //   setWorkout({
    //     todos,
    //   });
    // };

    const editItem = (index) => {
      const newWorkout = prompt('Let\'s make some changes');
      const todos = workout;
      todos.filter(todo => {
        if (todo.id === index + 1) {
          todo.title = newWorkout;
        }
        return todo;
      });
      setWorkout({ todos });
    }

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
                handleOnChange={toggleCompleted}
                handleOnRemove={removeItem}
                handleOnEdit={editItem}
            />
        </>
    )
}
export default List