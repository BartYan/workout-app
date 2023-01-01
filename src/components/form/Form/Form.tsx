import type { NextPage } from 'next';

import styles from '../../../../styles/Home.module.scss';

interface PropTypes {
    workout: any;
    newItem: string;
    handleChange: any;
    handleSubmit: any;
};

const Form: NextPage<PropTypes> = ({ workout, newItem, handleChange, handleSubmit }) => {
    
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.input__container}>
                <input
                type="text"
                placeholder="Dodaj element z tekstem"
                autoComplete="off"
                value={newItem}
                onChange={handleChange}
                className={styles.input__container_input}
                />
            </div>
        </form>
    )
}
export default Form