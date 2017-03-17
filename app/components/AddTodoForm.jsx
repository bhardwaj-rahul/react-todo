const React = require('react');

var AddTodoForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    var newTodo = this.refs.newTodo.value;
    if (newTodo) {
      this.refs.newTodo.value = '';
      this.props.onAddTodo(newTodo);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type ='text' ref='newTodo' placeholder='Add todo' />
        <button className='button expanded'>Add Todo</button>
      </form>
    );
  }
});

module.exports = AddTodoForm;
