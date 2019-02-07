const isValidProduct = (inStockOnly, filterText, productData) => {
  if ((inStockOnly === false) || (inStockOnly === true && productData.stocked === true)) {
    if (productData.name.indexOf(filterText) !== -1) {
      return true;
    }
  }
  return false;
};
export default isValidProduct;
