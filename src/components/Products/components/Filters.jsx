import { FiltersContext } from '../../../context/Filters';
import './Filters.css';
import { useState, useContext } from 'react';
export function Filters() {
  const {filters, setFilters} = useContext(FiltersContext);
    const [minPrice, setMinPrice] = useState(0);

    const handleChangeMinPrice = (e) => {
        
      setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    } 
    const handleChangeCategory = (e) => {
        setFilters(estadoPrevio => ({
            ...estadoPrevio,
            category: e.target.value
        }))
    } 

  return (
    <>
      <div className="filters mb-4">
        <div className="form-group">
          <label htmlFor="category">Categoría</label>
          <select 
          name="category" 
          id="category" 
          className="form-control"
          onChange={handleChangeCategory}
          >
            <option value="all">Todas</option>
            <option value="smartphones">Celulares</option>
            <option value="laptops">Computadoras</option>
            <option value="fragrances">Accesorios</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio</label>
          <input
            type="range"
            id="price"
            min="0"
            max="1000"
            className="form-control"
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
          />
          <span>${filters.minPrice}</span>
        </div>
      </div>
    </>
  );
}
