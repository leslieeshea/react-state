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

  it('changes color to yellow on button click', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.state('color')).toEqual('yellow');
  });

  it('changes color to blue on button click', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(2).simulate('click');
    expect(wrapper.state('color')).toEqual('blue');
  });

  it('changes div className based on selected color', done => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.setState({ color: 'red' }, () => {
      expect(wrapper.find('div').at(0).hasClass('red')).toBeTruthy();
      done();
    });
  });
});
