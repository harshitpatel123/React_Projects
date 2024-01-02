export const data = [
    {
        id : 0,
        Dname : "harshit",
        work : "Intern"
    },
    {
        id : 1,
        Dname : "kdsvkd",
        work : "llllll"
    },
    {
        id : 2,
        Dname : "serg",
        work : "ppppppp"
    },
    {
        id : 3,
        Dname : "erge",
        work : ";;;;;;;;"
    },
    {
        id : 4,
        Dname : "erte",
        work : "uuulllu"
    }
]


export default function Listitems(){
    const listdata = data.map(x => <li key={x.id}>name : {x.Dname} , work : {x.work}</li>)
    const choicedata = data.filter(x => x.id>2)
    const choicelist = choicedata.map(x => <li>name : {x.Dname} , work : {x.work}</li>)
    return (
        <div>
            <p>Data from array using Map</p>
            <ul>{listdata}</ul>
            <p>using filter</p>
            <ul>{choicelist}</ul>
        </div>
    )
}