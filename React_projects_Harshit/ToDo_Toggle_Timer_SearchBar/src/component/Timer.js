"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function HandleSetTimer(_a) {
    var nowtime1 = _a.nowtime1;
    var timervalue = Number(nowtime1);
    var _b = (0, react_1.useState)(timervalue), remaintime = _b[0], setremaintime = _b[1];
    (0, react_1.useEffect)(function () {
        var interval = setInterval(function () {
            setremaintime(function (prevTime) {
                if (prevTime > 0) {
                    return prevTime - 1;
                }
                else {
                    clearInterval(interval);
                    return 0;
                }
            });
        }, 1000);
        return function () { return clearInterval(interval); };
    }, [timervalue]);
    return <h1>Remaining Time : {remaintime}</h1>;
}
function Timer() {
    var _a = (0, react_1.useState)(''), nowtime = _a[0], setnowtime = _a[1];
    var _b = (0, react_1.useState)(false), testbool = _b[0], settestbool = _b[1];
    var _c = (0, react_1.useState)('Start Timer'), btntext = _c[0], setbtntext = _c[1];
    function HandleStartTime() {
        if (!testbool) {
            settestbool(true);
            setbtntext('Stop');
        }
        else {
            settestbool(false);
            setbtntext('Start Timer');
        }
    }
    return (<div>
            <h1>Timer</h1>
            <input value={nowtime} onChange={function (e) { return setnowtime(e.target.value); }} placeholder="Enter Time" type="number"/>
            <button onClick={HandleStartTime}>{btntext}</button>
            <br />
            <br />
            {testbool && <HandleSetTimer nowtime1={nowtime}/>}
        </div>);
}
export default Timer;
