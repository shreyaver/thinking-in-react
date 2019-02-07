import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SearchBar from '.';

describe('SearchBar', () => {
  it('renders without crashing', () => {
    const searchBar = renderer.create(<SearchBar />).toJSON();
    expect(searchBar).toMatchSnapshot();
  });
  it('sets value of checkbox according to passed value', () => {
    const wrapper = shallow(<SearchBar filterText="" inStockOnly />);
    expect(wrapper.find('.InStockCheckBox').props().checked).toEqual(true);
  });
  it('sets value of searchbox according to passed value', () => {
    const wrapper = shallow(<SearchBar filterText="abc" inStockOnly={false} />);
    expect(wrapper.find('.FilterSearchBox').props().value).toEqual('abc');
  });
  it('calls function when checkbox is toggled', () => {
    const changeInStockOnlyStateMock = jest.fn(x => x);
    const wrapper = shallow(<SearchBar filterText="" inStockOnly={false} changeInStockOnlyState={changeInStockOnlyStateMock} />);
    wrapper.find('.InStockCheckBox').simulate('change', { target: { checked: true } });
    expect(changeInStockOnlyStateMock).toHaveBeenCalled();
  });
  it('calls function when text is entered in searchbox', () => {
    const changeFilterTextStateMock = jest.fn(x => x);
    const wrapper = shallow(<SearchBar filterText="" inStockOnly={false} changeFilterTextState={changeFilterTextStateMock} />);
    wrapper.find('.FilterSearchBox').simulate('change', { target: { value: 'ball' } });
    expect(changeFilterTextStateMock).toHaveBeenCalled();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
});
