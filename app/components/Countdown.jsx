var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({

  getInitialState(){
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },

  startTimer(){
    console.log("Start timer called");
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
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          // will execute for stopped and paused
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
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

  handleStatusChange(newStatus){
    this.setState({
      countdownStatus: newStatus
    }); // calls component did update
  },

  render(){
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if(countdownStatus !== 'stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      }else{
        return <CountdownForm onSetCountdown={this.handleSetCountdown} />
      }
    };
    return (
      <div>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    )
  }
});

module.exports = Countdown;
