var React = require('react');
var {Link,IndexLink} = require('react-router'); // needed to switch links

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created By <a target="_blank" href="http://github.com/arrayoutofbounds">Anmol Desai</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

module.exports = Nav;