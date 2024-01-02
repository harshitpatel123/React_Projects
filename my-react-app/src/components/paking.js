function ListOfPacking({Iname,Istate}){
    return (
        <>
        <li>
            {Iname} {Istate && "  ---- Done"}
        </li>
        </>
    )
    }

export default function Packing(){
    return (
        <div>
        <ListOfPacking
            Iname = "Mobile"
            Istate={true}
            />
        <ListOfPacking
            Iname = "charger"
            Istate={false}
            />
        <ListOfPacking
            Iname = "facwash"
            Istate={true}
            />
        <ListOfPacking
            Iname = "soap"
            Istate={false}
            />
        </div>
    )
}