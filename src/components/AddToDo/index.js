import React from 'react';
import styles from './index.module.css'

const AddToDo = ({newTask, handleNewTaskChange, handleAddTask , onKeyDown}) => {

    return (
        <div
            className={styles.actions}>
            <input
                placeholder="enter some text..."
                className={styles.input}
                type="text"
                value={newTask}
                onChange={handleNewTaskChange}
                onKeyDown={onKeyDown}/>
            <button
                className={styles.btn}
                onClick={handleAddTask}
                >+</button>
        </div>
    );
};

export default AddToDo;