import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ProductRow from '.';

describe('ProductRow', () => {
  it('renders without crashing', () => {
    const productRow = renderer.create(<ProductRow product={{
      category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football',
    }}
    />);
    expect(productRow).toMatchSnapshot();
  });
  it('displays unstocked product in red color', () => {
    const wrapper = shallow(<ProductRow product={{
      category: 'Sporting Goods', price: '$49.99', stocked: false, name: 'Football',
    }}
    />);
    expect(wrapper.find('.ProductName').props().style).toHaveProperty('color', 'red');
  });
  it('displays stocked product in black color', () => {
    const wrapper = shallow(<ProductRow product={{
      category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football',
    }}
    />);
    expect(wrapper.find('.ProductName').props().style).toHaveProperty('color', 'black');
  });
});
