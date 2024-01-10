import React, { useState } from 'react'
import { useImmerReducer } from 'use-immer';

let listId = 0;

function taskreducer(draft, action) {
    switch (action.type) {
        case 'add': {
                draft.push({ 
                    id: action.id,
                    taskname: action.taskname 
                });
                break;
        }

        case 'remove': {
            return draft.filter((l1) => l1.id !== action.id);
            break;
        }
    }
}

export default function TaskList() {
    const initialtask = [
        { id: 100, taskname: "hello" },
        { id: 110, taskname: "gggg" },
        { id: 120, taskname: "jjjjj" },
        { id: 130, taskname: "kkkkk" }
    ]
    const [task, settask] = useState("")
    const [list, dispatch] = useImmerReducer(taskreducer, initialtask)

    function HandleAddTask() {
        dispatch({
            type: "add",
            id: listId++,
            taskname: task
        });
        settask("")
    }

    function HandleRemoveTask(id1) {
        dispatch({
            type: "remove",
            id: id1
        })
        // setlist(drafts => drafts.filter((l1) => l1.id !== id1));
    }


    return (
        <div>
            <h1>TASK LIST</h1>
            <br /><br />
            <input value={task} onChange={e => settask(e.target.value)} placeholder="Task to Add" />
            <button onClick={HandleAddTask}>ADD</button>
            <br /><br />
            <h2>Your Task</h2>
            <ul>
                {
                    list.map((l1) =>
                        <div>
                            <li key={l1.id}>{l1.taskname}
                                <button onClick={() => HandleRemoveTask(l1.id)} >Remove</button>
                            </li>
                        </div>

                    )
                }
            </ul>
        </div>
    )
}
