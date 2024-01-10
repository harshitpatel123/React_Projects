"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var StartPage_1 = require("./StartPage");
var MainGame_1 = require("./MainGame");
function Game() {
    var _a = (0, react_1.useState)(true), start = _a[0], setstart = _a[1];
    var tempkey = 0;
    if (start) {
        return (<div>
        <center>
        <StartPage_1.default />
        <button onClick={function () { return setstart(false); }}>Start</button>
        </center>
      </div>);
    }
    else {
        tempkey++;
        return (<div>
        <center>
        <MainGame_1.default key={tempkey}/>
        <button onClick={function () { return setstart(true); }} style={{ float: "right" }}>ReStart</button>
        </center>
      </div>);
    }
}
export default Game;
