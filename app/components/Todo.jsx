const React = require('react');
var Todo = React.createClass({
  render: function() {
    var {id, text, index, completed} = this.props;
    return (
      <div onClick={ () => {
          this.props.onToggle(id);
        } }>
        <input type='checkbox' checked={completed} />
        {index}. {text}
      </div>
    );  
  }
});

module.exports = Todo;
