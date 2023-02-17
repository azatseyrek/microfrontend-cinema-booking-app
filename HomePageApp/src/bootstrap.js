import '@babel/polyfill'; // This is for async/await support. babel can undertstand then/catch but not async/await. for fixing this we need to import this polyfill

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));
