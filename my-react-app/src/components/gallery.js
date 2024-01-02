import Photo from "./photo"

export function Gl1(){
    let name1 = "HarshitPatel"
    return (
        <div style={
            {
                backgroundColor: "yellow",
                color: 'blue'
            }
        }>
        <h1>This is Gallery componenet {name1}</h1>
            <Photo/>
        </div>
    )
}