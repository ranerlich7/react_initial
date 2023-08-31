import "../App.css";
const products = ["Cart", "Tent", "Battery"];

function Products() {
  return (
    <>
      <table className="table" border="1">
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Products;
