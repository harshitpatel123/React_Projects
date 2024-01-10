import React,{useState} from 'react'

function ShowItemlist({itemarr}){
    return (
        <div>
            <h2>Item List</h2>
            <ul>
                {
                    itemarr.map((item) =>
                        <li>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default function SearchBar() {
    const itemlist = ["phone", "charger", "wallet", "purse", "shirt", "pant", "watch"]
    const [itemname,setitemname] = useState("")
    const [searchitem,setsearchitem] = useState("")

    function HandleItemSearch(){
        const matcheditem = itemlist.filter((i1)=>i1.startsWith(itemname))
        setsearchitem(matcheditem.toString())
    }

    return (
        <div>
            <h1>Search Filter</h1>
            <ShowItemlist itemarr={itemlist}/>
            <input value={itemname} onChange={e => setitemname(e.target.value)} placeholder="Search For Item" />
            <button onClick={HandleItemSearch} >Search</button>
            <h3>Result : {searchitem}</h3>
        </div>
    )
}
