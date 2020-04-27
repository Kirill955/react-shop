import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.body);

serviceWorker.unregister();
