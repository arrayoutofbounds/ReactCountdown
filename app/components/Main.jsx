var React = require('react');
var Nav = require('Nav');

// small-centered scales up and centers it for medium and large
var Main = (props) => {
  return (
    <div>
      <Nav />
    <div className="row">
        <div className="column small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
