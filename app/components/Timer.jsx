var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({

  getInitialState(){
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },

  handleStart(){
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    },1000);
  },

  //called when props or state changed
  componentDidUpdate(prevProps,prevState){
    if(this.state.timerStatus !== prevState.timerStatus){
      // update application and start running
      switch (this.state.timerStatus) {
        case 'started':
          this.handleStart();
          break;
        case 'stopped':
          this.setState({
            count:0
          });
        case 'paused':
          //clear interval
          clearInterval(this.timer);
          this.timer = undefined;
        default:

      }
    }
  },

  componentWillUnmount(){
    clearInterval(this.timer); // stop interval
    this.timer = undefined; // clears the var
  },

  handleStatusChange(newTimerStatus){
    // change state
    this.setState({
      timerStatus: newTimerStatus
    }); // calls the component did update
  },

  render(){
    var {count, timerStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock  totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    )
  }
});

module.exports = Timer;
