import "../App.css";
import Product from "./Product";
const products = [
  { name: "Cart", price: 9.9 },
  { name: "Tent", price: 19.9 },
  { name: "Battery", price: 10.9 },
];

function Products() {
  return (
    <>
      <table className="table" border="1">
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <Product product={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Products;
