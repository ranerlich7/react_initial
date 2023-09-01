import "../App.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css";
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
      <table className="mytable" border="1">
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
