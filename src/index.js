import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const defaultPitchers = ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'];
const pitcherReducer = (state = defaultPitchers, action) => {
   if (action.type === 'ADD_PITCHER') {
      return [...state, action.payload];
   }
   return state;
}

const currentPitcherReducer = (state = 'Maud Nelson', action) => {
   if (action.type === 'SET_ACTIVEPITCHER') {
      return action.payload;
   }
   return state; 
}

const defaultCatchers = ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'];
const catcherReducer = (state = defaultCatchers, action) => {
   if (action.type === 'ADD_CATCHER') {
      return [...state, action.payload];
   }
   return state;
}

const currentCatcherReducer = (state = 'Elston Howard', action) => {
    if (action.type === 'SET_ACTIVECATCHER') {
        return action.payload;
     }
   return state;
}

const storeInstance = createStore(
   combineReducers({
      pitchers: pitcherReducer,
      currentPitcher: currentPitcherReducer,
      catchers: catcherReducer,
      currentCatcher: currentCatcherReducer
   }),
   applyMiddleware(logger)
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // turns on the redux devtools
);

ReactDOM.render(
   <Provider store={storeInstance}>
      <App />
   </Provider>
   , document.getElementById('root')
);