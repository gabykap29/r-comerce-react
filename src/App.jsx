import { Products } from "./components/Products/Products.jsx";
import {products} from './mooks/products.json'
import { useContext, useState } from "react";
import { Filters } from "./components/Products/components/Filters.jsx";
import { FiltersContext } from "./context/Filters.jsx";
function App() {

const {filters,setFilters} = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
        return (
            product.price >= filters.minPrice &&
            (filters.category === "all" || product.category === filters.category)
        );
    })
}

const filteredProducts = filterProducts(products);

  return (
      <div className="container">
      < Filters changeFilter = {setFilters} />
      <div className="text-bg-dark container">
          <Products products={filteredProducts} />
      </div>
      </div>
  )
}
export default App
