import { useState } from "react";
import "../App.css";
import Product from "./Product";


function Products() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
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
    
        Name: <input value={name} onChange={(e)=> setName(e.target.value)} />
        Price: <input type="number" step="0.01" value={price} onChange={(e)=> setPrice(e.target.value)} />
        <button className="btn btn-success" onClick={()=>setProducts([...products, {"name":name, "price":price}])}>Add product</button>
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
