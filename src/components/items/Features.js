import { useState } from 'react';

export default function Features({ onSort, onClear, setSort, sort }) {
    // useStates HOOKS
    // const [sort, setSort] = useState('inputOrder');
    const [clear, setClear] = useState('all');

    return (
        <div className="featuresContainer">
            <form className="featuresForm">
                <div>
                    <select
                        value={sort}
                        onChange={(e) => {
                            setSort(e.target.value);
                        }}
                    >
                        <option value="inputOrder">Sort by input order</option>
                        <option value="description">Sort by description</option>
                        <option value="completedTasks">
                            Sort by completed tasks
                        </option>
                    </select>
                    <input
                        type="submit"
                        className="clearBtn btn"
                        value="Sort"
                        // onClick={(e) => onSort(e, sort)}
                    />
                </div>

                <div className="clearContainer">
                    <select
                        value={clear}
                        onChange={(e) => setClear(e.target.value)}
                    >
                        <option value="all"> Clear all</option>
                        <option value="completedTasks">
                            Clear completed tasks
                        </option>
                    </select>
                    <input
                        type="submit"
                        className="clearBtn btn"
                        value="Clear"
                        onClick={(e) => onClear(e, clear)}
                    />
                </div>
            </form>
        </div>
    );
}
