import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import ProductTable from '../ProductTable';
import PropTypes from 'prop-types';

class FilterableProductTable extends Component {
    state = { filterText: this.props.filterText, inStockOnly: this.props.inStockOnly }
    changeFilterTextState = (newFilterText) => {
        this.setState((state) => ({
            filterText: newFilterText
        }))
    }
    changeInStockOnlyState = (newInStockOnly) => {
        this.setState((state) => ({
            inStockOnly: newInStockOnly
        }))
    }
    render() {
      return (
          <div>
              <SearchBar filterText = {this.state.filterText} inStockOnly = {this.state.inStockOnly} changeFilterTextState = {this.changeFilterTextState} changeInStockOnlyState = {this.changeInStockOnlyState}/>
              <ProductTable productArray = {this.props.productArray} filterText = {this.state.filterText} inStockOnly = {this.state.inStockOnly} />
          </div>
      ) 
    }
}
FilterableProductTable.propTypes = {
    filterText: PropTypes.string,
    inStockOnly: PropTypes.bool
  };
FilterableProductTable.defaultProps = {
    filterText: '',
    inStockOnly: false
};
export default FilterableProductTable;