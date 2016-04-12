var React = require('react');
var ReactDOM = require('react-dom');
var Filesharer = require('./components/fileshare.jsx');

var options = {
    peerjs_key: 'YOUR_PEERJS_KEY'
};

var Main = React.createClass({
  render: function () {
    return <Filesharer opts={options} />;
  }
});

var main = document.getElementById('main');

ReactDOM.render(<Main/>, main);
