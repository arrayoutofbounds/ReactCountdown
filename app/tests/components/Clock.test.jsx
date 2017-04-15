var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
// test modules from react
var TestUtils = require('react-addons-test-utils');
var Clock = require('Clock'); // allows clock to be generated later

describe('Clock', () => {
  it('should exist',() => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      expect(actualText).toBe('01:02');
    });
  });

  describe('format seconds', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>); // renders element and returns it.
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec are less than 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>); // renders element and returns it.
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });

});
