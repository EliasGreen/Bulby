const React = require('react');
const { render } = require('react-dom');

const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;

/* Import Components */
const Main = require('./components/Main');

render((
<BrowserRouter>
  <div>
    <Route exact path="/" component={Main}/>
  </div>
</BrowserRouter>), document.getElementById('main'));