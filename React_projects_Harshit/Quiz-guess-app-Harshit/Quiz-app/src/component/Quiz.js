"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var StartPage_1 = require("./StartPage");
var Questions_1 = require("./Questions");
function Quiz() {
    var _a = (0, react_1.useState)(true), start = _a[0], setstart = _a[1];
    var setkey = 0; // using key to reset the useState values 
    if (start) {
        return (<div>
        <center>
        <StartPage_1.default />
        <button onClick={function () { return setstart(false); }}>Start</button>
        </center>
      </div>);
    }
    else {
        setkey++;
        return (<div>
        <center>
        <Questions_1.default key={setkey}/>
        <button onClick={function () { return setstart(true); }} style={{ float: "right" }}>ReStart</button>
        </center>
      </div>);
    }
}
export default Quiz;
