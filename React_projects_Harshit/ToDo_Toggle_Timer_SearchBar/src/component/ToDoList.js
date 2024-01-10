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
    var _d = (0, react_1.useState)(), editId = _d[0], seteditId = _d[1];
    var _e = (0, react_1.useState)(''), editText = _e[0], seteditText = _e[1];
    function HandleAddTask() {
        setlist(__spreadArray(__spreadArray([], list, true), [
            { id: idCounter, taskname: task }
        ], false));
        setIdCounter(idCounter + 1);
        settask('');
    }
    function HandleChangeTask(l1) {
        seteditId(l1.id);
        seteditText(l1.taskname);
    }
    function HandleSaveTask(l1) {
        l1.taskname = editText;
        seteditId(null);
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
                {list.map(function (l1) {
            return <div>
                            <li key={l1.id}>
                                {l1.id === editId ?
                    <>
                                <input value={editText} onChange={function (e) { return seteditText(e.target.value); }}/>
                                &nbsp; &nbsp;
                                <button onClick={function () { return HandleSaveTask(l1); }} className='btnclass'>Save</button>
                                </>
                    :
                        <>
                                {l1.taskname}
                                &nbsp; &nbsp;
                                <button onClick={function () { return HandleChangeTask(l1); }} className='btnclass'>Edit</button>
                                </>}
                                <button onClick={function () { return HandleRemoveTask(l1.id); }} className='btnclass'>Remove</button>
                            </li>
                        </div>;
        })}
            </ul>
        </div>);
}
export default ToDoList;
