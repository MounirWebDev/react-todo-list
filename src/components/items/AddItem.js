import { useState } from 'react';

export default function AddItems({ onAddTasks, tasksData }) {
    // useState HOOKS
    const [task, setTask] = useState('');

    // HANDLE FUNCTIONS
    function handleAddNewTask(e) {
        e.preventDefault();
        // check if the task input is empty
        if (!task) return;
        const newTask = {
            id: crypto.randomUUID(),
            task,
            isCompleted: false,
        };
        // set new task data
        onAddTasks((curr) => [...curr, newTask]);
        // set the input task to an empty string
        setTask('');
    }

    return (
        <div className="myFormContainer" onSubmit={handleAddNewTask}>
            <form className="myForm">
                <label>
                    <input
                        type="text"
                        className="taskInput"
                        placeholder="New task goes here..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </label>
                <input type="submit" className="addBtn btn" value="Add" />
            </form>
        </div>
    );
}
