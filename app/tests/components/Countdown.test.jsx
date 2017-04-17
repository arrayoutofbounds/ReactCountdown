var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
// test modules from react
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist',() => {
    expect(Countdown).toExist();
  });

  describe('handle set countdown', () => {
    // done lets mocha know that the test is aysnc and it should wait till done before stopping the test
    it('should set state to started and count down', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(10); // call internal component method

      // countdown status must be updated
      expect(countdown.state.countdownStatus).toBe('started');
      // count should be updated
      expect(countdown.state.count).toBe(10);

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      },1001);
    });

    it('should not set count below 0', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1); // call internal component method

      // countdown status must be updated
      expect(countdown.state.countdownStatus).toBe('started');
      // count should be updated
      expect(countdown.state.count).toBe(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      },3001);
    });

    it('should pause countdown on pause status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(3); // call internal component method to start countdown

      countdown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      },1001);
    });

    it('should stop countdown on stop status', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(3); // call internal component method to start countdown

      countdown.handleStatusChange('stopped');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      },1001);
    });
  });
});
