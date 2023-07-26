import './summary.css';

export default function Summary({ tasksNumber, completedTaskNumber }) {
    const percentage =
        ((completedTaskNumber / tasksNumber || 0) * 100).toFixed();

    return (
        <footer>
            <div>
                <p>
                    You have <span>{tasksNumber}</span>{' '}
                    {tasksNumber > 1 ? 'tasks' : 'task'} on your todo list and
                    you already completed <span>{completedTaskNumber}</span>.{' '}
                    <span>({percentage}% )</span>
                </p>
            </div>
        </footer>
    );
}
