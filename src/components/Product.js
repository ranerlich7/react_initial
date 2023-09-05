function Product({ product }) {
  return (
    <>
      <tr>
        <td>{product.name}</td>
        <td>{product.price} $</td>
        <td>{product.stock} </td>
        <td>{product.category} </td>
      </tr>
    </>
  );
}

export default Product;
