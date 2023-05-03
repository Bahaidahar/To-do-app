import React from 'react';
import styles from './index.module.css'
const ToDO = ({index, task, handleTaskComplete, handleDeleteTask}) => {
    return (
        <li
            className={styles.toDo}
            key={index}>
            <div className={styles.btnGreen} disabled={task.completed} onClick={() => handleTaskComplete(index)}>✓</div>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            <div className={styles.btnRed} onClick={() => handleDeleteTask(index)}>X</div>
        </li>
    );
};

export default ToDO;