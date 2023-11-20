import {useState} from "react";

let ArrayList = [
    "Primer Elemento",
]

const ListElement = () => {
    const [array, setArray] = useState(ArrayList);
    const [newElement, setNewElement] = useState("");
    const [value, setValue]= useState(0);

    const addElement = ()=>{
        setArray([...array, newElement]);
        setNewElement("");
    }

    setTimeout(() => {
        setValue(value + 1);    
    },2000)
    return (
        <>
        {value < 2 ? <div>Cargando....</div> :         
        (
        <div className="card ">
            <div className="card-headers bg-dark text-center">
            <p style={{color:"white"}}>Prueba de carga de Array</p>
            </div>
            <div className="card-body">
            <input 
            type="text" 
            value={newElement}  
            onChange={
                (e)=>setNewElement(e.target.value)
            } 
            id="InputArray"  
            />
            <button className="btn btn-primary" onClick={addElement} >Cargar</button>
            <ul className="mt-2">
                {array.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            </div>
        </div>
        )
        }
        </>
    )
}

export default ListElement;