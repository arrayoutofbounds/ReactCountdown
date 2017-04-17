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
    // allows acccess to timer through the object
    this.timer = setInterval(() =>{
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      // countdown is complete
      if(newCount === 0){
        this.setState({countdownStatus: 'stopped'});
      }
    },1000);
  },

  /* just before the component is shown to the screen via render. No access to refs or dom as not shown yet
  componentWillMount(){
    console.log("component will mount");
  },

  // right after everything is rendered in dom. Access to refs etc
  componentDidMount(){
    console.log("component did mount");
  },

  componentWillUpdate(nextProps,nextState){

  },
  */

  // fired before component is removed from dom visually.
  componentWillUnmount(){
    clearInterval(this.timer); // stop interval
    this.timer = undefined; // clears the var
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
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    )
  }
});

module.exports = Countdown;
