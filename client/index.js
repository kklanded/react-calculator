// import React from 'react'; // import React package
// import ReactDOM from 'react-dom'; // import ReactDOM package

const React = require('react');
const ReactDOM = require('react-dom');


// using the render method, we will mount this node into our DOM (html file) on the element with
// id of 'app'
ReactDOM.render(
  "<div> Hello World</div>",
  document.getElementById('app')
);
