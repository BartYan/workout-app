import type { NextPage } from 'next';
import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { selectWorkout } from '../../../../slices/workoutSlice';

import styles from '../../../../styles/Home.module.scss';

interface PropTypes {
    // workout: any;
    // handleOnRemove: any;
    // handleEdit: any;
};

const AddItem: NextPage<PropTypes> = () => {
    
    useEffect(() => {

    }, []);

    return (
      <div className={styles.items__wrapper}>
        <div className={styles.add}>
            <span className={styles.add__line}></span>
            <button className={styles.btn}>
                <span>+</span>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z"/></svg> */}
            </button>
            <span className={styles.add__line}></span>
        </div>
      </div>
    );
}
export default AddItem