import { useFetch } from "./useFetch";
const ItemsPost = () => {
    const {datos, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts");
    return (
        <div className="container">
            <div className="row">
            {datos.length != 0 ? (
                    datos.map((dato,index)=>(
                        <div className="card col-3 p-2" key={index}>
                            <div className="card-header text-bg-dark">
                            <p>{dato.title}</p>
                            </div>
                            <div className="card-body">
                            <p>{dato.body}</p>
                            </div>
                        </div>
                    )
                    )):(<div>Cargando...</div>)
            
                    }
            </div>
        </div>    
    )


}

export default ItemsPost;