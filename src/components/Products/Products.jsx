import "../../assets/iconCarrito.svg";
import "./Products.css";
import CartShoping from "./components/CartShoping.jsx";

export const Products = ({ products }) => {

    

    return (
    <>
      <main className="products">
        <ul>
          {products.slice(0,10).map((product) => (
            <div className="card">
                <div className="card-header text-bg-primary">

                </div>
                <div className="card-body ">
                <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong>
                <span>: $ {product.price}</span>
              </div>
              <div>
                <button className="btn btn-secondary">
                  <CartShoping />
                  Agregar al carrito
                </button>
              </div>
            </li>
                </div>
                <div className="card-footer text-bg-primary"></div>
            </div>
          ))}
        </ul>
      </main>
    </>
  );
};
