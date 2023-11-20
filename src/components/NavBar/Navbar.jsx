import { useState } from "react";
const Navbar = () => {
const [search , setSearch] = useState("");
const [value, setValue] = useState(3);

    const handleSearch = async(e)=>{
        setSearch(e.target.value);
    }


    const postFilter = async() => {
      
    }


    const searchPost = async(e)=>{
        if(e.key === "Enter"){
           
        }

    }

  return (
    <div className="d-flex justify-content-center align-items-center'">
      {value < 2 ? (
        <div>Cargando...</div>
      ) : (
        <div className="card">
          <div className="card-header text-bg-dark">
            <p>Eventos</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">Buscar Usuarios</h5>
            <input type="text" value={search} id="inputArray" onChange={handleSearch} onKeyDown={searchPost} />
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
