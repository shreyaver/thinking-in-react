import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import FilterableProductTable from '.';

describe('FilterableProductTable', () => {
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
  it('renders without crashing for stocked and unstocked products and no filter text', () => {
    const filterableProductTable = renderer.create(<FilterableProductTable productArray={productArray} />).toJSON();
    expect(filterableProductTable).toMatchSnapshot();
  });
  it('gets state change when checkbox is toggled', () => {
    const wrapper = mount(<FilterableProductTable productArray={productArray} />);
    expect(wrapper.instance().state.inStockOnly).toEqual(false);
    wrapper.find('.InStockCheckBox').simulate('change', { target: { checked: true } });
    expect(wrapper.instance().state.inStockOnly).toEqual(true);
    wrapper.unmount();
  });
  it('gets state change when text is entered in searchbox', () => {
    const wrapper = mount(<FilterableProductTable productArray={productArray} />);
    expect(wrapper.instance().state.filterText).toEqual('');
    wrapper.find('.FilterSearchBox').simulate('change', { target: { value: 'abc' } });
    expect(wrapper.instance().state.filterText).toEqual('abc');
    wrapper.unmount();
  });
});
// xit('renders without crashing for only stocked products and no filter text', () => {
//   const filterableProductTable = renderer.create(<FilterableProductTable productArray = {productArray} filterText= '' inStockOnly= {true} />).toJSON();
//   expect(filterableProductTable).toMatchSnapshot();
// });
// xit('renders without crashing for stocked and unstocked products and passed filter text', () => {
//   const filterableProductTable = renderer.create(<FilterableProductTable productArray = {productArray} filterText= 'Phone' inStockOnly= {false} />).toJSON();
//   expect(filterableProductTable).toMatchSnapshot();
// });
// xit('renders without crashing for only stocked products and passed filter text', () => {
//   const filterableProductTable = renderer.create(<FilterableProductTable productArray = {productArray} filterText= 'ball' inStockOnly= {true} />).toJSON();
//   expect(filterableProductTable).toMatchSnapshot();
// });
