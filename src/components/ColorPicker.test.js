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
});
