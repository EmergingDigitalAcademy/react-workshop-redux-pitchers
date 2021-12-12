import { combineReducers } from "redux";

import pitchers from './pitchers';

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

export default combineReducers({
  pitchers,
  currentPitcher: currentPitcherReducer,
  catchers: catcherReducer,
  currentCatcher: currentCatcherReducer
});
