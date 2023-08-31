import { useState } from "react";
import "../App.css";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);
  const [pName, setpName] = useState("");
  return (
    <>
      Product Name:
      <input className="form-control" value={pName} onChange={(e) => setpName(e.target.value)} />
      <button onClick={() => setProducts([...products, { name: pName, price: 1.99 }])} className="btn btn-success">
        Add product
      </button>
      <hr />
      <h3>Products:</h3>
      {products.map((product, index) => (
        <div className="alert alert-primary" key={index}>
          <Product product={product} />
        </div>
      ))}
    </>
  );
}

export default Products;
