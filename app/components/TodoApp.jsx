const React = require('react');
const TodoList = require('TodoList');
const AddTodoForm = require('AddTodoForm');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');
const TodoAPI = require('TodoAPI');
const moment = require('moment');

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
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
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
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
        <h1 className="page-title">Todo App</h1>
        <div className='row'>
          <div className="column small-centered small-11 medium-6 large-5">
            <div className='container'>
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filterTodos} onToggle={this.handleToggle}/>
              <AddTodoForm onAddTodo = {this.handleAddTodo} />
            </div>
          </div>
        </div>
      </div>


    );
  }
});

module.exports = TodoApp;
