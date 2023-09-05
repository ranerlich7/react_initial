import { useState } from "react";
import "../App.css";
import Product from "./Product";


function Products() {
    const [products, setProducts] = useState([
        {
          name: "Cart",
          price: 30,
        },
        {
          name: "Tent",
          price: 300,
        },
        {
          name: "Battery",
          price: 3,
        },
      ]);
      
  return (
    <>
      <table className="table" border="1">
        <tbody>
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Products;
