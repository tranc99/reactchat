// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

// import React and libs
import React from 'react';
import ReactDOM from 'react-dom';

var ReactIntro = React.createClass({
  render() {
    return(
      <h1>Hi, I am a React Component</h1>
    );
  }
});

export var App = {
  run: function() {
    console.log('javascript in action!');
    var elem = document.getElementById("test-react");
    ReactDOM.render(<ReactIntro />, elem);
  }
}
