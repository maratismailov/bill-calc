import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './services/localStorage'
import reducer from './store/reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore'

const initialState = loadState() || window.__INITIAL_STATE__
const store = configureStore(initialState, { })

// const composeEnhancers = composeWithDevTools({
//     // Specify name here, actionsBlacklist, actionsCreators and other options if needed
//   });
// const store = createStore(reducer,  composeEnhancers());

store.subscribe(() => {
  saveState({
    checks: store.getState().checks,
    checkId: store.getState().checkId,
    memberId: store.getState().memberId,
    dishId: store.getState().dishId,
  })
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
