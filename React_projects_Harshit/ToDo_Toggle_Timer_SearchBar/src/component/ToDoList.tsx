import React, { useState } from 'react';

interface Task {
    id: number;
    taskname: string;
}

export default function ToDoList(): JSX.Element {
    const [task, settask] = useState<string>('');
    const [list, setlist] = useState<Task[]>([]);
    const [idCounter, setIdCounter] = useState<number>(1);
    const [editId, seteditId] = useState<number|null>()
    const [editText,seteditText] = useState<string>('')

    function HandleAddTask(): void {
        setlist([
            ...list,
            { id: idCounter, taskname: task }
        ]);
        setIdCounter(idCounter + 1);
        settask('');
    }

    function HandleChangeTask(l1) {
        seteditId(l1.id)
        seteditText(l1.taskname)
    }

    function HandleSaveTask(l1){
        l1.taskname = editText
        seteditId(null)
    }

    function HandleRemoveTask(id1: number): void {
        setlist(list.filter((l1) => l1.id !== id1));
    }

    return (
        <div>
            <h1>TO-DO-LIST</h1>
            <input value={task} onChange={e => settask(e.target.value)} placeholder="Task to Add" />
            <button onClick={HandleAddTask}>ADD</button>
            <h2>Your Task</h2>
            <ul>
                {
                    list.map((l1) =>
                        <div>
                            <li key={l1.id}>
                                {l1.id === editId ?
                                <>
                                <input value={editText} onChange={(e)=>seteditText(e.target.value)} />
                                &nbsp; &nbsp;
                                <button onClick={() => HandleSaveTask(l1)} className='btnclass'>Save</button>
                                </>
                            :
                                <>
                                { l1.taskname }
                                &nbsp; &nbsp;
                                <button onClick={() => HandleChangeTask(l1)} className='btnclass'>Edit</button>
                                </>
                            }
                                <button onClick={() => HandleRemoveTask(l1.id)} className='btnclass'>Remove</button>
                            </li>
                        </div>

                    )
                }
            </ul>
        </div>
    );
}
