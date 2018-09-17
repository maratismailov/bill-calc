import { applyMiddleware, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
import reducer from './store/reducer'

export default function configureStore(preloadedState) {
  // const middlewares = [loggerMiddleware, thunkMiddleware]
  // const middlewareEnhancer = applyMiddleware(...middlewares)
  // const composeEnhancers = composeWithDevTools({
  //   // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  // });
  // const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools()

  const store = createStore(reducer, preloadedState, composedEnhancers)

  return store
}