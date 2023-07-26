import { useState } from 'react';

export default function Item({
    task,
    onDeleteTask,
    onCompletedTask,
    onEditTask,
    id,
    setId,
}) {
    // useStates HOOKS
    const [newTaskName, setNewTaskName] = useState(task.task);

    return (
        <>
            {id !== task.id ? (
                <li
                    className={`todoTask ${
                        task.isCompleted ? 'completedTask' : ''
                    }`}
                >
                    <p
                        className={`todoTaskName ${
                            task.isCompleted ? 'completed' : ''
                        }`}
                    >
                        <span>{task.task}</span>
                    </p>
                    <div className="icons">
                        <span className="icon edit" onClick={setId}>
                            <i className="ri-edit-fill"></i>
                        </span>
                        <span
                            className={`icon complete-button ${
                                task.isCompleted ? 'completedBtn' : ''
                            }`}
                            onClick={onCompletedTask}
                        >
                            <i className="ri-check-line"></i>
                        </span>
                        <span
                            className="icon delete-button"
                            onClick={onDeleteTask}
                        >
                            <i className="ri-delete-bin-fill"></i>
                        </span>
                    </div>
                </li>
            ) : (
                <form
                    className="myForm newTaskName"
                    onSubmit={(e) => {
                        onEditTask(e, id, newTaskName);
                        setId(null);
                    }}
                >
                    <label>
                        <input
                            type="text"
                            className="taskInput"
                            placeholder="New task goes here..."
                            value={newTaskName}
                            onChange={(e) => setNewTaskName(e.target.value)}
                        />
                    </label>
                    <input type="submit" className="addBtn btn" value="Edit" />
                </form>
            )}
        </>
    );
}
