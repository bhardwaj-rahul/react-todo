
const React = require('react');
const ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!applicationStyles');

$(document).foundation();
ReactDOM.render(
  <Router history ={hashHistory}>
    <Route path="/" component={Main} >
    </Route>
  </Router>,
  document.getElementById('app')
);
