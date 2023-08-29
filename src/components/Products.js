import "../App.css";
const products = ["Cart", "Tent", "Battery"];

function Products() {
  return (
    <>
      {/* <table style={{ color: "red", backgroundColor: "blue" }} border="1"> */}

      <table className="mytable" border="1">
        {products.map((product) => (
          <tr>
            <td>{product}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Products;
