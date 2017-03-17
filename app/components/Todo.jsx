const React = require('react');
var Todo = React.createClass({
  render: function() {
    var {id, text, index} = this.props;
    return (
      <div><p>{index}. {text}</p></div>
    );
  }
});

module.exports = Todo;
