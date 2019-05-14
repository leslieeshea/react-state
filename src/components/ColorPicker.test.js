import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  it('renders a ColorPicker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });

  it('changes color to red on button click', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('color')).toEqual('red');
  });
});
