"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function DarkMode(props) {
    var whitestyle = {
        border: "5px solid black",
        backgroundColor: "white",
        color: "black",
        height: "auto",
        width: "100%",
        borderRadius: "10px",
        paddingTop: "10px",
        margin: "auto",
        marginTop: "100px",
    };
    var blackstyle = {
        border: "5px solid red",
        backgroundColor: "black",
        color: "white",
        height: "auto",
        width: "100%",
        borderRadius: "10px",
        paddingTop: "10px",
        margin: "auto",
        marginTop: "100px",
    };
    var lightbtnstyle = {
        color: "black",
        backgroundColor: "white",
        borderRadius: "4px",
        textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        fontSize: "130%",
    };
    var darkbtnstyle = {
        color: "white",
        backgroundColor: "black",
        borderRadius: "4px",
        textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        fontSize: "130%",
    };
    var toggletheme = function () {
        if (oldtheme.color === "black") {
            newtheme(blackstyle);
            newtxt("Light");
            setbtnstyle(lightbtnstyle);
        }
        else {
            newtheme(whitestyle);
            newtxt("Dark");
            setbtnstyle(darkbtnstyle);
        }
    };
    var _a = (0, react_1.useState)(whitestyle), oldtheme = _a[0], newtheme = _a[1];
    var _b = (0, react_1.useState)("Dark"), oldtxt = _b[0], newtxt = _b[1];
    var _c = (0, react_1.useState)(darkbtnstyle), btnstyle = _c[0], setbtnstyle = _c[1];
    return (<div style={oldtheme}>
            <center>
                <p>
                    <h1>Toggle Switch</h1>
                    <h2>This is Theme changing Button</h2>
                    <button onClick={toggletheme} type="button" style={btnstyle}>
                        {oldtxt}
                    </button>
                </p>
            </center>
        </div>);
}
export default DarkMode;
