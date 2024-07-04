import './ToDoList.css';
import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState("");
    const [newPriority, setNewPriority] = useState("");


    function handleInputChange(event) {
        setNewTasks(event.target.value);
    }

    function addTask() {
        if(newTasks.trim()) {
            const newTaskItem = {
                text: newTasks.trim(),
                priority: newPriority
            };
            setTasks(tasks =>[...tasks, newTaskItem]);
            setNewTasks("");    
        }
        
    }

    function deleteTask(index) {
        const updatedTask = tasks => tasks.filter((_, i) => i !== index);
        setTasks(updatedTask)
    }

    function sortAlphabeticalOrder() {
        const sortedTodos = [...tasks].sort((a, b) => a.text.localeCompare(b.text));
        setTasks(sortedTodos);
    }
    
    function sortPriority() {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        const sortedTodos = [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
        setTasks(sortedTodos);
    }

    return(
        <div className="toDoList">    
            <h1>TO DO APP</h1>
            <br />
            <div className="optionsBar">
                <input
                    type="text"
                    value={newTasks}
                    onChange={handleInputChange}
                    placeholder="Enter a task... "
                />
                <select defaultValue={'DEFAULT'} onChange={(event) => setNewPriority(event.target.value)}>
                    <option value="DEFAULT" disabled>Choose Priotity</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <button className='add-btn' onClick={addTask}>Add To-Do</button>
                <br />
                <button className='sort-btn' onClick={sortAlphabeticalOrder}>Sort Alphabetically</button>
                <button className='sort-btn' onClick={sortPriority}>Sort by Priority</button>
            </div>

            <div className="taskList">
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index} className={`priority-${task.priority}`}>
                            {task.text} ({task.priority})
                        <button className='delete-btn' onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            
            



        </div>
        
    );

}

export default ToDoList;

