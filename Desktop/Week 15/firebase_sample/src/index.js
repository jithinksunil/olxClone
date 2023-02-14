import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Firebase from './firebaase/config';
import Context from './store/FirebaseContext'
import { FirebaseContext } from './store/FirebaseContext';
ReactDOM.render(
<FirebaseContext.Provider value={{ Firebase }}>
  <Context>
    <App />
  </Context>
</FirebaseContext.Provider>, document.getElementById('root'));