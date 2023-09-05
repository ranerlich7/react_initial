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
    const [refresh, setRefresh] = useState(false)
    useEffect(() => {
        // get products.json from django web server
        // set products to react products state
        
        axios.get("http://127.0.0.1:8000/product").then((res) => {
            setProducts(res.data);
            console.log(res.data);})
              },[refresh]);
    function addProduct() {
        // setProducts([...products, {"name":name, "price":price}])        
        axios
          .post("http://127.0.0.1:8000/product/", {
            "name":name, "price":price, 
            "stock":1, "category":1
          })
          .then((res) => {
            console.log(res.data);
            setRefresh(!refresh)
          })
    }
  return (
    <>
        Name: <input value={name} onChange={(e)=> setName(e.target.value)} />
        Price: <input type="number" step="0.01" value={price} onChange={(e)=> setPrice(e.target.value)} />
        {/* add to products the new product when pressing this button */}
        <button className="btn btn-success" onClick={addProduct}>Add product</button>
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
