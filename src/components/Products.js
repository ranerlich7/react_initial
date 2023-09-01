import "../App.css";
import Product from "./Product";

const products = [
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
];

function Products() {
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
