import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('ColorDisplay component', () => {
  it('renders a color display', () => {
    const wrapper = shallow(<ColorDisplay color = "FF0000" />);
    expect(wrapper).toMatchSnapshot();
  });
});

