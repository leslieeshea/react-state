import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  it('renders a color picker', () => {
    const wrapper = shallow(<ColorPicker selectColorHandler={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
