import { useEffect, useState } from "react";
import "../App.css";
import Product from "./Product";
import axios from 'axios';

function callServer(){
}

function Products() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Update the document title using the browser API
        
        axios.get("http://127.0.0.1:8000/product").then((res) => {
            setProducts(res.data);
            console.log(res.data);})
              },[]);

  return (
    <>
        Name: <input value={name} onChange={(e)=> setName(e.target.value)} />
        Price: <input type="number" step="0.01" value={price} onChange={(e)=> setPrice(e.target.value)} />
        <button className="btn btn-success" onClick={()=>setProducts([...products, {"name":name, "price":price}])}>Add product</button>
        <button onClick={callServer}>Call Server</button>
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
