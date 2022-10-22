import type { NextPage } from 'next'
import { useState, useEffect }from 'react'

import styles from '../styles/Home.module.scss'

interface PropTypes {
    workout: any;
    newItem: string;
    handleChange: (e) => void;
    handleSubmit: (e) => void;
};

const Form: NextPage<PropTypes> = ({ workout, newItem, handleChange, handleSubmit }) => {
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="input-icon">
                <i className="fa fa-list-ol icon" aria-hidden="true"></i>
                <input 
                type="text"
                placeholder="Add item..."
                autoComplete="off"
                value={newItem}
                onChange={handleChange}
                />
            </div>
            </form>
        </div>
    )
}
export default Form