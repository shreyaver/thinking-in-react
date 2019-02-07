import isValidProduct from './isValidProduct';

describe('isValidProduct()', () => {
  it('should return true if product is in stock and only products in stock are required', () => {
    const productData = {
      category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football',
    };
    expect(isValidProduct(true, '', productData)).toEqual(true);
  });
  it('should return false if product is not in stock and only products in stock are required', () => {
    const productData = {
      category: 'Sporting Goods', price: '$49.99', stocked: false, name: 'Football',
    };
    expect(isValidProduct(true, '', productData)).toEqual(false);
  });
  it('should return true if product is in stock and all products are required', () => {
    const productData = {
      category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football',
    };
    expect(isValidProduct(false, '', productData)).toEqual(true);
  });
  it('should return true if product is not in stock and all products are required', () => {
    const productData = {
      category: 'Sporting Goods', price: '$49.99', stocked: false, name: 'Football',
    };
    expect(isValidProduct(false, '', productData)).toEqual(true);
  });
  it('should return true if product name matches filter text', () => {
    const productData = {
      category: 'Sporting Goods', price: '$49.99', stocked: false, name: 'Football',
    };
    expect(isValidProduct(false, 'ball', productData)).toEqual(true);
  });
  it('should return false if product name does not match filter text', () => {
    const productData = {
      category: 'Sporting Goods', price: '$49.99', stocked: false, name: 'Football',
    };
    expect(isValidProduct(false, 'Phone', productData)).toEqual(false);
  });
});
