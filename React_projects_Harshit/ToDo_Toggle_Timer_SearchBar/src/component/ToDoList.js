"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function ToDoList() {
    var _a = (0, react_1.useState)(''), task = _a[0], settask = _a[1];
    var _b = (0, react_1.useState)([]), list = _b[0], setlist = _b[1];
    var _c = (0, react_1.useState)(1), idCounter = _c[0], setIdCounter = _c[1];
    function HandleAddTask() {
        setlist(__spreadArray(__spreadArray([], list, true), [
            { id: idCounter, taskname: task }
        ], false));
        setIdCounter(idCounter + 1);
        settask('');
    }
    function HandleRemoveTask(id1) {
        setlist(list.filter(function (l1) { return l1.id !== id1; }));
    }
    return (<div>
            <h1>TO-DO-LIST</h1>
            <input value={task} onChange={function (e) { return settask(e.target.value); }} placeholder="Task to Add"/>
            <button onClick={HandleAddTask}>ADD</button>
            <h2>Your Task</h2>
            <ul>
                {list.map(function (l1) { return (<div key={l1.id}>
                        <li>{l1.taskname}
                            <button onClick={function () { return HandleRemoveTask(l1.id); }} className='btnclass'>Remove</button>
                        </li>
                    </div>); })}
            </ul>
        </div>);
}
export default ToDoList;
