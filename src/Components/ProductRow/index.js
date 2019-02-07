import React from 'react';

const ProductRow = (props) => {
  const style = props.product.stocked ? { color: 'black' } : { color: 'red' };
  return (
    <tr>
      <td className="ProductName" style={style}>{props.product.name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
};
export default ProductRow;
