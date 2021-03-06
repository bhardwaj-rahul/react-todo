const React = require('react');
const moment = require('moment');
var Todo = React.createClass({
  render: function() {
    var {id, text, index, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? "todo todo-completed" : "todo";
    var renderDate = () => {
      var message = 'Created At : ';
      var timeStamp = createdAt;
      if (completed) {
        timeStamp = completedAt;
        message =' Completed At : '
      }
      return message + moment.unix(timeStamp).format("MMM Do YYYY @ h:mm a");
    }
    return (
      <div className={todoClassName} onClick={ () => {
          this.props.onToggle(id);
        } }>
        <div>
          <input type='checkbox' checked={completed} />
        </div>
        <div>
          <p>{index}.{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

module.exports = Todo;
