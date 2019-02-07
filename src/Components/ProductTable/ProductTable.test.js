import React from 'react';
import renderer from 'react-test-renderer';
import ProductTable from '.';

describe('ProductTable', () => {
  const productArray = [
    {
      category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football',
    },
    {
      category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball',
    },
    {
      category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball',
    },
    {
      category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch',
    },
    {
      category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5',
    },
    {
      category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7',
    },
  ];
  it('renders without crashing', () => {
    const productTable = renderer.create(<ProductTable productArray={productArray} />).toJSON();
    expect(productTable).toMatchSnapshot();
  });
});
// xit('renders without crashing for only stocked products and no filter text', () => {
//   const productTable = renderer.create(<ProductTable productArray = {productArray} filterText= '' inStockOnly= {true} />).toJSON();
//   expect(productTable).toMatchSnapshot();
// });
// xit('renders without crashing for stocked and unstocked products and passed filter text', () => {
//   const productTable = renderer.create(<ProductTable productArray = {productArray} filterText= 'Phone' inStockOnly= {false} />).toJSON();
//   expect(productTable).toMatchSnapshot();
// });
// xit('renders without crashing for only stocked products and passed filter text', () => {
//   const productTable = renderer.create(<ProductTable productArray = {productArray} filterText= 'ball' inStockOnly= {true} />).toJSON();
//   expect(productTable).toMatchSnapshot();
// });
