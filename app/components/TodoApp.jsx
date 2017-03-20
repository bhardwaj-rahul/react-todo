const React = require('react');
const TodoList = require('TodoList');
const AddTodoForm = require('AddTodoForm');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');
const TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: TodoAPI.getTodos(),
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
          text: text,
          completed: false
        }
      ]
    });

  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  handleToggle : function (id) {
    // alert(id);
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });


  },

  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filterTodos} onToggle={this.handleToggle}/>
        <AddTodoForm onAddTodo = {this.handleAddTodo} />
      </div>

    );
  }
});

module.exports = TodoApp;
