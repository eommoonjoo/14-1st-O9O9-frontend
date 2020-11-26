import React, { Component } from 'react';
import './Countdown.scss';

class CountDown extends Component {
  constructor() {
    super();
    this.state = { time: 23445 };
  }

  tick = () => {
    this.setState((state) => ({ time: state.time - 1 }));
  };

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getRealTime = (time) => {
    let obj = {},
      divisorForMinute,
      divisorForSecond;
    divisorForMinute = time % (60 * 60);
    divisorForSecond = divisorForMinute % 60;
    obj['hour'] = Math.floor(time / (60 * 60));
    obj['minute'] = Math.floor(divisorForMinute / 60);
    obj['second'] = Math.ceil(divisorForSecond);
    return obj;
  };

  render() {
    const realTimeObj = this.getRealTime(this.state.time);
    return (
      <div className='Countdown'>
        <span>
          {realTimeObj.hour}:{realTimeObj.minute}:{realTimeObj.second}
        </span>
      </div>
    );
  }
}

export default CountDown;
