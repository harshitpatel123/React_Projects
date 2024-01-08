"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function MainGame() {
    var _a = (0, react_1.useState)(false), gamecomplete = _a[0], setgamecomplete = _a[1];
    var _b = (0, react_1.useState)(''), hint = _b[0], sethint = _b[1];
    var _c = (0, react_1.useState)(0), answer = _c[0], setanswer = _c[1];
    var _d = (0, react_1.useState)(Math.floor(Math.random() * 20 + 1)), pcguess = _d[0], setpcguess = _d[1];
    function HandleCheckGuess() {
        if (answer > pcguess) {
            sethint("Lower...");
        }
        else if (answer < pcguess) {
            sethint("Higher...");
        }
        else if (answer == pcguess) {
            setgamecomplete(true);
        }
    }
    function HandleOnChange(e) {
        setanswer(e.target.value);
    }
    if (gamecomplete) {
        return (<div>
                <h1>WOW !!!</h1>
                <br />
                <h1>You Win</h1>
                <h3>Press restart To Replay The Game</h3> 
            </div>);
    }
    else {
        return (<div>
                <center>
                    <h2>Computer Has Decided A Number Between 1 To 20</h2>
                    <h2>Enter Your Guess</h2>
                    <input value={answer} onChange={HandleOnChange} type="number"/><br />
                    <button onClick={HandleCheckGuess}>Check</button>
                    <br /><br />
                    <h3>{hint}</h3>
                </center>
            </div>);
    }
}
export default MainGame;
