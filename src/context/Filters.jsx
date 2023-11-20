import { createContext, useContext, useState } from "react";

//crear el nuevo contexto
export const FiltersContext = createContext();


export function FilterProvider ({children}){
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    }); 
    return (
        <FiltersContext.Provider 
        value={{
            filters,
            setFilters
        }}
        
        >
            {children}
        </FiltersContext.Provider>
    )
}
