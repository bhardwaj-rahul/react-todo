
const React = require('react');
const ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
const TodoApp = require('TodoApp');

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!applicationStyles');

$(document).foundation();
ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
