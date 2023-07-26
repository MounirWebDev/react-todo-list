import { useState } from 'react';
import Message from './Message';
import Item from './Item';
import './item.css';
import Features from './Features';
import AddItems from './AddItem';

export default function Items({ tasksData, setTasksData, handleClear }) {
    // useStates, useRefs HOOKS
    const [isBeAdded, setIsBeAdded] = useState(false);
    const [isBeDeleted, setIsBeDeleted] = useState(false);
    const [sort, setSort] = useState('inputOrder');
    const [id, setId] = useState(null);

    // Normal Variables
    let sortTasksData = [...tasksData];
    const border = { border: '1px solid #8e44ad' };

    // Hnadle Funcitons
    function handleDeleteTask(id) {
        setTasksData(tasksData.filter((currEl) => currEl.id !== id));
    }
    function handleComletedTask(id) {
        setTasksData(
            tasksData.map((currEl) =>
                currEl.id !== id
                    ? currEl
                    : { ...currEl, isCompleted: !currEl.isCompleted }
            )
        );
    }
    function handleEditTask(e, id, newTaskName) {
        e.preventDefault();
        if (!newTaskName) return;
        setTasksData(
            tasksData.map((currEl) =>
                currEl.id !== id ? currEl : { ...currEl, task: newTaskName }
            )
        );
    }

    // sort the tasks data
    if (sort === 'description')
        sortTasksData = [...tasksData].sort((a, b) => {
            const x = a.task.toLowerCase();
            const y = b.task.toLowerCase();
            if (x > y) return 1;
            else if (x < y) return -1;
        });
    else if (sort === 'completedTasks')
        sortTasksData = [...tasksData].sort(
            (a, b) => a.isCompleted - b.isCompleted
        );
    else sortTasksData = [...tasksData];
    return (
        <main>
            <section>
                {!isBeAdded && !isBeDeleted && (
                    <Message>
                        <p className="message empty">empty</p>
                    </Message>
                )}
                {isBeAdded && (
                    <Message>
                        <p className="message add">
                            New task has been added to your todo list
                        </p>
                    </Message>
                )}
                {isBeDeleted && (
                    <Message>
                        <p className="message delete">
                            A task has been deleted from your todo list
                        </p>
                    </Message>
                )}
                <AddItems onAddTasks={setTasksData} />
                <div
                    className={`items`}
                    style={tasksData.length > 0 ? border : {}}
                >
                    <ul>
                        {sortTasksData.map((currEl) => (
                            <Item
                                task={currEl}
                                key={currEl.id}
                                onDeleteTask={() => handleDeleteTask(currEl.id)}
                                onCompletedTask={() =>
                                    handleComletedTask(currEl.id)
                                }
                                id={id}
                                setId={() =>
                                    setId(currEl.id === id ? null : currEl.id)
                                }
                                onEditTask={handleEditTask}
                            />
                        ))}
                    </ul>
                </div>
                <Features sort={sort} setSort={setSort} onClear={handleClear} />
            </section>
        </main>
    );
}
