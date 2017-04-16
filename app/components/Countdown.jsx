var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({

  getInitialState(){
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },

  startTimer(){
    // allows acccess to timer through the object
    this.timer = setInterval(() =>{
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    },1000);
  },

  // after props or state is updated
  componentDidUpdate(prevProps,prevState){
    if(this.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        default:

      }
    }
  },

  handleSetCountdown(seconds){
    this.setState({
      count:seconds,
      countdownStatus: 'started'
    }); // calls component did update
  },

  render(){
    var count = this.state.count;
    return (
      <div>
        <Clock totalSeconds={count} />
      <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    )
  }
});

module.exports = Countdown;
