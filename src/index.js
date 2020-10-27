import React from 'react';
import ReactDOM from 'react-dom';
import PropsChildren from './lesson06/Props-children';
// import App from './App'; //by lesson-03
// import State from './lesson04/State'; //by lesson-04
// import State from './lesson05/State'; //by lesson-05
import State from './lesson06/Props-children'; //by lesson-06

ReactDOM.render(
  // <App txt="This is the prop txt" />,  //by lesson-03
  // <State />,  //by lesson-05
  <PropsChildren />,  //by lesson-06
  
  document.getElementById('root')
);