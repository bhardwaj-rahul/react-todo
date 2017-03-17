const React = require('react');
var TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <div >
          <div >
            <p>TodoApp.jsx Rendered</p>
            {this.props.children}
          </div>
        </div>
      </div>

    );
  }
});

module.exports = TodoApp;
