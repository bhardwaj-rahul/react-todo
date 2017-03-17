const React = require('react');
const TodoList = require('TodoList');
const AddTodoForm = require('AddTodoForm');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');
var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
          {
            id: uuid(),
            text: "walk the dog"
          }, {
            id: uuid(),
            text: "Clean the yard"
          }
      ],
      showCompleted: false,
      searchText: ''
    }
  },
  handleAddTodo: function (text) {
    // alert('new todo:' + text);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
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
