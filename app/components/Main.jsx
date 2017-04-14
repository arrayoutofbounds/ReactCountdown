var React = require('react');
var Nav = require('Nav');

// small-centered scales up and centers it for medium and large
var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav />
          <p> Main.jsx rendered </p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
