import React from 'react';
import PropTypes from 'prop-types';

// handleFilterTextChange = (newFilterText) => {
//     this.props.changeFilterTextState(newFilterText.target.value);
// }
// handleInStockOnlyChange = (newInStockOnly) => {
//     this.props.changeInStockOnlyState(newInStockOnly.target.checked);
// }
const SearchBar = props => (
  <form>
    <input type="text" className="FilterSearchBox" placeholder="Search..." value={props.filterText} onChange={newFilterText => props.changeFilterTextState(newFilterText.target.value)} />
    <br />
    <input type="checkbox" className="InStockCheckBox" checked={props.inStockOnly} onChange={newInStockOnly => props.changeInStockOnlyState(newInStockOnly.target.checked)} />
Only show products in stock
  </form>
);

SearchBar.propTypes = {
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool,
};
SearchBar.defaultProps = {
  filterText: '',
  inStockOnly: false,
};
export default SearchBar;
