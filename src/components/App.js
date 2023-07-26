import { useState, useEffect } from 'react';
import Header from './header/Header';
import Item from './items/Items';
import Summary from './summary/Summary';

function App() {
    // useStates HOOKS
    const [tasksData, setTasksData] = useState(() => {
        const storedTasks = localStorage.getItem('tasks') ?? '[]';
        return JSON.parse(storedTasks);
    });

    // Normal Variables
    const tasksNumber = tasksData.length;
    const completedTaskNumber = tasksData.filter(
        (currEl) => currEl.isCompleted
    ).length;
    // let sortTasksData = [...tasksData];

    // HANDLE FUNCTIONS
    // function handleSortTasks(e, value) {
    //     e.preventDefault();
    //     if (value === 'description') {
    //         sortTasksData = [...tasksData].sort((a, b) => {
    //             const x = a.task.toLowerCase();
    //             const y = b.task.toLowerCase();
    //             if (x > y) return 1;
    //             else if (x < y) return -1;
    //         });
    //     } else if (value === 'completedTasks') {
    //         sortTasksData = [...tasksData].sort(
    //             (a, b) => a.isCompleted - b.isCompleted
    //         );
    //     } else if (value === 'inputOrder') sortTasksData = [...tasksData];
    // }
    function handleClear(e, value) {
        e.preventDefault();

        if (value === 'all') setTasksData([]);
        else if (value === 'completedTasks')
            setTasksData(tasksData.filter((currEl) => !currEl.isCompleted));
    }

    // useEffects HOOKS
    // local storage
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasksData));
    }, [tasksData]);
    return (
        <div className="container">
            <Header />
            <Item
                tasksData={tasksData}
                setTasksData={setTasksData}
                handleClear={handleClear}
                // handleSortTasks={handleSortTasks}
                // sortTasksData={sortTasksData}
            />
            <Summary
                tasksNumber={tasksNumber}
                completedTaskNumber={completedTaskNumber}
            />
        </div>
    );
}

export default App;
