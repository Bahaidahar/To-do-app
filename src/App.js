import React, {useState} from 'react';
import AddToDo from "./components/AddToDo";
import ToDo from "./components/ToDo";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');


    const handleNewTaskChange = (event) => {
        setNewTask(event.target.value);
    };

    const onKeyDown = (event) => {
        if (event.key === 'Enter'){
            handleAddTask();
        }
    }

    const handleAddTask = () => {
        if(newTask) {
            setTasks([...tasks, {text: newTask, completed: false}]);
            setNewTask('');
        }
    };

    const handleTaskComplete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = true;
        setTasks(updatedTasks);
    };


    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };





    return (
        <div className="to-do-app">
            <h1 className="to-do-title">Todo List</h1>
            <AddToDo handleAddTask={handleAddTask} onKeyDown={onKeyDown} newTask={newTask} handleNewTaskChange={handleNewTaskChange} />
            <div className="line"></div>
            <ul className="toDos">
                {tasks.map((task, index) => (
                    <ToDo index={index} task={task} handleDeleteTask={handleDeleteTask} handleTaskComplete={handleTaskComplete}/>
                ))}
            </ul>
        </div>
    );
};

export default App;