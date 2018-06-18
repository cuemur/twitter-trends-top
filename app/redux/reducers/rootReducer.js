import { combineReducers } from 'redux';

import trendControl from './trendControl';

const rootReducer = combineReducers( {
  trendList: trendControl,
} );

export default rootReducer;
