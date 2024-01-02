import Photo from "./photo"

export function Gl1({name2,age}){
    let name1 = "HarshitPatel"
    return (
        <div style={
            {
                backgroundColor: "yellow",
                color: 'blue'
            }
        }>
        <h1>This is Gallery componenet {name1}</h1>
        <p>this name is coming from promps --- name: {name2} , age : {age}</p>
            <Photo/>
        </div>
    )
}