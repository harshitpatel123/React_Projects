"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function ShowItemlist(_a) {
    var itemarr = _a.itemarr;
    return (<div>
            <h2>Item List</h2>
            <ul>
                {itemarr.map(function (item) { return (<li key={item}>{item}</li>); })}
            </ul>
        </div>);
}
function SearchBar() {
    var itemlist = ["phone", "charger", "wallet", "purse", "shirt", "pant", "watch"];
    var _a = (0, react_1.useState)(""), itemname = _a[0], setitemname = _a[1];
    var _b = (0, react_1.useState)(""), searchitem = _b[0], setsearchitem = _b[1];
    function HandleItemSearch() {
        var matcheditem = itemlist.filter(function (i1) { return i1.startsWith(itemname); });
        setsearchitem(matcheditem.toString());
    }
    return (<div>
            <h1>Search Filter</h1>
            <ShowItemlist itemarr={itemlist}/>
            <input value={itemname} onChange={function (e) { return setitemname(e.target.value); }} placeholder="Search For Item"/>
            <button onClick={HandleItemSearch}>Search</button>
            <h3>Result : {searchitem}</h3>
        </div>);
}
export default SearchBar;
