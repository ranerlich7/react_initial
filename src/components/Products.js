import "../App.css";
const products = ["Cart", "Tent", "Battery"];

function Products() {
  return (
    <>
      {/* <table style={{ color: "red", backgroundColor: "blue" }} border="1"> */}

      <table className="mytable" border="1">
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
