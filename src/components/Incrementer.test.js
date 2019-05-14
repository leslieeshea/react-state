import React from 'react';
import { shallow  } from 'enzyme';
import Incrementer from './Incrementer';

describe('Incrementer component', () => {
  it('renders an Incremementer', () => {
    const wrapper = shallow(<Incrementer />);
    expect(wrapper).toMatchSnapshot();
  });
});
