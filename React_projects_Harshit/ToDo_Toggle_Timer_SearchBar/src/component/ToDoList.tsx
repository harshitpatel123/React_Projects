import React, { useState } from 'react';

interface Task {
    id: number;
    taskname: string;
}

export default function ToDoList(): JSX.Element {
    const [task, settask] = useState<string>('');
    const [list, setlist] = useState<Task[]>([]);
    const [idCounter, setIdCounter] = useState<number>(1);

    function HandleAddTask(): void {
        setlist([
            ...list,
            { id: idCounter, taskname: task }
        ]);
        setIdCounter(idCounter + 1);
        settask('');
    }

    function HandleRemoveTask(id1: number): void {
        setlist(list.filter((l1) => l1.id !== id1));
    }

    return (
        <div>
            <h1>TO-DO-LIST</h1>
            <input value={task} onChange={(e) => settask(e.target.value)} placeholder="Task to Add" />
            <button onClick={HandleAddTask}>ADD</button>
            <h2>Your Task</h2>
            <ul>
                {list.map((l1) => (
                    <div key={l1.id}>
                        <li>{l1.taskname}
                            <button onClick={() => HandleRemoveTask(l1.id)} className='btnclass'>Remove</button>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}
