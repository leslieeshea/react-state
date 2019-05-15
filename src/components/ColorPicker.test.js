import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  it('renders a color picker', () => {
    const wrapper = shallow(<ColorPicker selectColorHandler={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('selects red on button click', () => {
    const selectColorHandler = jest.fn();
    const wrapper = shallow(<ColorPicker selectColorHandler={selectColorHandler} />);
    wrapper.find('button').at(0).simulate('click');
    expect(selectColorHandler).toHaveBeenCalledWith('red');
  });

  it('selects yellow on button click', () => {
    const selectColorHandler = jest.fn();
    const wrapper = shallow(<ColorPicker selectColorHandler={selectColorHandler} />);
    wrapper.find('button').at(1).simulate('click');
    expect(selectColorHandler).toHaveBeenCalledWith('yellow');
  });

  it('selects blue on button click', () => {
    const selectColorHandler = jest.fn();
    const wrapper = shallow(<ColorPicker selectColorHandler={selectColorHandler} />);
    wrapper.find('button').at(2).simulate('click');
    expect(selectColorHandler).toHaveBeenCalledWith('blue');
  });
});
