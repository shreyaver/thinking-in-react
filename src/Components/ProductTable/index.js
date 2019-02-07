import React from 'react';
import PropTypes from 'prop-types';
import ProductCategoryRow from '../ProductCategoryRow';
import ProductRow from '../ProductRow';
import isValidProduct from '../../helpers/Components/ProductTable/isValidProduct';

const ProductTable = (props) => {
  let currentCategory = null;
  const rows = props.productArray.reduce((result, productData) => {
    if (productData.category !== currentCategory) {
      result.push(<ProductCategoryRow key={productData.category} category={productData.category} />);
      currentCategory = productData.category;
    }
    if (isValidProduct(props.inStockOnly, props.filterText, productData)) {
      result.push(<ProductRow key={productData.name} product={productData} />);
    }
    return result;
  }, []);
  const tableStyle = { border: '1px solid black' };
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
ProductTable.propTypes = {
  productArray: PropTypes.array.isRequired,
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool,
};
ProductTable.defaultProps = {
  filterText: '',
  inStockOnly: false,
};
export default ProductTable;
