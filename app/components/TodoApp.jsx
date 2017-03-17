const React = require('react');
const TodoList = require('TodoList');
const AddTodoForm = require('AddTodoForm');
const TodoSearch = require('TodoSearch');
var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
          {
            id:"1",
            text: "walk the dog"
          }, {
            id:"2",
            text: "Clean the yard"
          }
      ],
      showCompleted: false,
      searchText: ''
    }
  },
  handleAddTodo: function (text) {
    alert('new todo:' + text);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} />
        <AddTodoForm onAddTodo = {this.handleAddTodo} />
      </div>

    );
  }
});

module.exports = TodoApp;
