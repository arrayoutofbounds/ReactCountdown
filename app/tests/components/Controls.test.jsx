var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
// test modules from react
var TestUtils = require('react-addons-test-utils');
var Controls = require('Controls'); // allows clock to be generated later

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause button when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)'); // checks the text value of a button, that must have Pause.
      expect($pauseButton.length).toBe(1); // one button is found with name Pause
    });

    it('should render start when button is paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Start)'); // checks the text value of a button, that must have Start.
      expect($pauseButton.length).toBe(1); // one button is found with name Start
    });
  });
});
