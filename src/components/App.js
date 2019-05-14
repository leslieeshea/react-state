import React, { PureComponent } from 'react';
import Header from './Header';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';

export default class App extends PureComponent {
  state = {
    color: ''
  }

  selectColor = color => {
    this.setState({ color });
  }


  render() {
    const { color } = this.state;

    return (
      <>
        <Header />
        <ColorPicker selectColorHandler={this.selectColor} />
        <ColorDisplay color={color} />
      </>
    );
  }
}
