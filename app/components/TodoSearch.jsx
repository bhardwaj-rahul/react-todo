const React = require('react');
var TodoSearch = React.createClass({
  handleSearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchTodo.value;
    this.props.onSearch(showCompleted, searchText);
  },
  render: function() {
    return (
      <div>
        <div>
          <input type ='search' placeholder='Search for a todo' ref='searchTodo' onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type='checkbox' ref='showCompleted' onChange={this.handleSearch}/> Show Completed Todos
          </label>
        </div>
      </div>

    );
  }
});

module.exports = TodoSearch;
