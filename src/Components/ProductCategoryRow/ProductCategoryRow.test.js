import React from 'react';
import renderer from 'react-test-renderer';
import ProductCategoryRow from '.';

describe('ProductCategoryRow', () => {
  it('renders without crashing', () => {
    const productCategoryRow = renderer.create(<ProductCategoryRow category="Electronics" />).toJSON();
    expect(productCategoryRow).toMatchSnapshot();
  });
});
