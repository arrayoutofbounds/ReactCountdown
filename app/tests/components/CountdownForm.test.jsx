var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
// test modules from react
var TestUtils = require('react-addons-test-utils');


var CountdownForm = require('CountdownForm');

describe("CountdownForm" , () => {
  it('should exist', () =>{
    expect(CountdownForm).toExist();
  });

  it('should call on set countdown if valid seconds', () => {
    var spy = expect.createSpy();
    // render component
    var countdownform = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    // get dome node of a given component. IN this case the countdown-form
    var $el = $(ReactDOM.findDOMNode(countdownform));

    countdownform.refs.seconds.value = '109';

    //simulate a submit on the form element in the countdown component
    TestUtils.Simulate.submit($el.find('form')[0]); // get first

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call set countdown if invalid seconds', () => {
    var spy = expect.createSpy();
    // render component
    var countdownform = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    // get dome node of a given component. IN this case the countdown-form
    var $el = $(ReactDOM.findDOMNode(countdownform));

    countdownform.refs.seconds.value = '109b';

    //simulate a submit on the form element in the countdown component
    TestUtils.Simulate.submit($el.find('form')[0]); // get first

    expect(spy).toNotHaveBeenCalled();
  })
});
