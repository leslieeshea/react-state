import React, { PureComponent } from 'react';

export default class RandomColor extends PureComponent {
  state = {
    color: '',
    trigger: new Date(),
    img: ''
  };

  randomColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    const n = Math.floor(Math.random() * colors.length);

    return colors[n];
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ color: this.randomColor(), trigger: new Date(), img: '' });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.color === this.state.color) {
      this.setState({ img: 'https://thumbs.gfycat.com/DemandingWelltodoGallinule-poster.jpg' });
    }
  }

  componentWillUnmount() {
    this.intervalId && clearInterval(this.intervalId);
  }

  render() {
    const { color, img } = this.state;
    const styles = {
      background: img ? `center / contain url(${img})` : color,
      width: '50em',
      height: '50em'
    };
    return <div style={styles}></div>;
  }
}
